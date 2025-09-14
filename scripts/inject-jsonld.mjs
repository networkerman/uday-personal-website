import { readFile, writeFile, access } from "node:fs/promises";
import fs from "node:fs/promises";
import path from "node:path";
import { glob } from "glob";

const OUTPUT_DIR = "dist"; // change if your output dir differs
const CONFIG_PATH = path.join("scripts", "seo.config.json");

// ---------- helpers ----------
async function fileExists(p) {
  try { await access(p); return true; } catch { return false; }
}

function abs(siteUrl, maybeAbs) {
  if (!maybeAbs) return undefined;
  if (maybeAbs.startsWith("http://") || maybeAbs.startsWith("https://")) return maybeAbs;
  return `${siteUrl.replace(/\/$/, "")}/${maybeAbs.replace(/^\//, "")}`;
}

function inject(html, id, data) {
  const tag = `<script id="${id}" type="application/ld+json">${JSON.stringify(data)}</script>`;
  if (html.includes(`id="${id}"`)) return html; // idempotent
  // Prefer injecting before </head>. If no </head>, prepend.
  if (html.includes("</head>")) return html.replace("</head>", `${tag}\n</head>`);
  return `${tag}\n${html}`;
}

// ---------- schema builders ----------
function personSchema(siteUrl, person) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#me`,
    name: person.name,
    url: `${siteUrl}/`,
    jobTitle: person.jobTitle,
    worksFor: { "@type": "Organization", name: person.worksFor?.name },
    sameAs: person.sameAs || []
  };
}

function websiteSchema(siteUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: "Udayan — Product Manager Portfolio",
    publisher: { "@id": `${siteUrl}/#me` },
    inLanguage: "en"
  };
}

function itemListSchema(siteUrl, projects) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${siteUrl}/projects/${p.slug}`
    }))
  };
}

function projectSchema(siteUrl, p) {
  const type = p.isArticle ? "Article" : "CreativeWork";
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${siteUrl}/projects/${p.slug}/#work`,
    mainEntityOfPage: `${siteUrl}/projects/${p.slug}`,
    name: p.name,
    headline: p.headline ?? p.name,
    description: p.description ?? "",
    url: `${siteUrl}/projects/${p.slug}`,
    image: abs(siteUrl, p.image) ?? `${siteUrl}/og-image.jpg`,
    datePublished: p.datePublished,
    dateModified: p.dateModified,
    author: { "@id": `${siteUrl}/#me` },
    inLanguage: "en",
    keywords: p.keywords
  };
}

// ---------- main ----------
async function run() {
  const raw = await readFile(CONFIG_PATH, "utf8");
  const cfg = JSON.parse(raw);
  const siteUrl = cfg.siteUrl.replace(/\/$/, "");

  // 1) Homepage: Person + WebSite
  {
    const home = path.join(OUTPUT_DIR, "index.html");
    if (await fileExists(home)) {
      let html = await readFile(home, "utf8");
      html = inject(html, "ld-person", personSchema(siteUrl, cfg.person));
      html = inject(html, "ld-website", websiteSchema(siteUrl));
      await writeFile(home, html, "utf8");
      console.log(`[inject-jsonld] ✅ Injected Person + WebSite schema into ${home}`);
    } else {
      console.warn(`[inject-jsonld] ⚠️  Skipped: ${home} not found`);
    }
  }

  // 2) Projects index: ItemList
  {
    const projIndex = path.join(OUTPUT_DIR, "projects", "index.html");
    if (await fileExists(projIndex)) {
      let html = await readFile(projIndex, "utf8");
      html = inject(html, "ld-projects-index", itemListSchema(siteUrl, cfg.projects || []));
      await writeFile(projIndex, html, "utf8");
      console.log(`[inject-jsonld] ✅ Injected ItemList schema into ${projIndex}`);
    } else {
      console.warn(`[inject-jsonld] ⚠️  Skipped: ${projIndex} not found`);
    }
  }

  // 3) Individual project pages: CreativeWork/Article
  for (const p of cfg.projects || []) {
    const file = path.join(OUTPUT_DIR, "projects", p.slug, "index.html");
    if (!(await fileExists(file))) {
      console.warn(`[inject-jsonld] ⚠️  Skipped project ${p.slug}: ${file} not found`);
      continue;
    }
    let html = await readFile(file, "utf8");
    html = inject(html, `ld-${p.slug}`, projectSchema(siteUrl, p));
    await writeFile(file, html, "utf8");
    console.log(`[inject-jsonld] ✅ Injected ${p.isArticle ? 'Article' : 'CreativeWork'} schema into ${file}`);
  }

  console.log("[inject-jsonld] 🎉 JSON-LD injection complete");
}

run().catch((e) => { console.error(e); process.exit(1); });
