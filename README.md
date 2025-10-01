# Udayan Das Chowdhury - Portfolio Website

A modern, responsive portfolio website showcasing professional experience, projects, and expertise in Product Management, Martech, and CPaaS solutions.

**Live URL**: https://www.udayandaschowdhury.site

## ✨ Recent Updates

### 🎥 Projects Section Enhancement
- **Added Loom Video Integration**: Embedded project demo video with responsive design
- **External Link**: "Watch on Loom" button for full-screen viewing
- **Project Impact Summary**: Placeholder section for showcasing business impact
- **Section Reordering**: Moved Projects section after Experience for better flow

### 🔍 SEO Optimization
- **robots.txt**: Search engine crawling directives with sitemap reference
- **sitemap.xml**: Comprehensive site structure for search engines
- **Meta Tags**: Complete Open Graph and Twitter Card optimization
- **JSON-LD Structured Data**: Rich snippets for search results
- **Canonical URLs**: Duplicate content prevention
- **Mobile Optimization**: Apple touch icons and theme colors

### 🤖 Automatic JSON-LD Injection System
- **Dynamic Schema Generation**: Automatically injects structured data during build
- **Multiple Schema Types**: Person, WebSite, ItemList, and CreativeWork schemas
- **Idempotent Operation**: Safe to run multiple times without duplicates
- **Centralized Configuration**: Easy project data management via `scripts/seo.config.json`
- **Build Integration**: Automatic injection via postbuild hook

### 🌐 Domain & Redirects
- **Custom Domain**: Configured for https://www.udayandaschowdhury.site
- **Redirect System**: `_redirects` file for seamless domain redirection
- **Cloudflare Bypass Protection**: Works at hosting level

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

Clone this repo and work locally using your own IDE. Push changes to update the repository.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## 🛠️ Development Commands

```sh
# Development server with hot reload
npm run dev

# Production build with SEO optimization
npm run build

# Development build (unminified)
npm run build:dev

# Preview production build locally
npm run preview

# Lint code for quality
npm run lint
```

## 📝 Updating Project Data

To add or update projects in the JSON-LD structured data:

1. Edit `scripts/seo.config.json` with your project information
2. Run `npm run build` to automatically inject the updated schemas
3. The system will generate appropriate structured data for each project

## 🔧 SEO Configuration

The site includes comprehensive SEO optimization:

- **Automatic JSON-LD Injection**: Updates structured data during build
- **Meta Tag Management**: Centralized in `index.html`
- **Sitemap Generation**: Static sitemap in `public/sitemap.xml`
- **Robots.txt**: Search engine directives in `public/robots.txt`

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## 🛠️ Technical Stack

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript development
- **React** - Component-based UI library
- **shadcn-ui** - Modern UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## 📁 Project Structure

```
├── public/                    # Static assets
│   ├── robots.txt            # SEO crawling directives
│   ├── sitemap.xml           # Site structure for search engines
│   └── favicon.ico           # Site favicon
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── sections/         # Page sections (Hero, About, Projects, etc.)
│   │   └── ui/              # shadcn-ui components
│   ├── lib/
│   │   ├── constants.ts      # Site configuration constants
│   │   └── utils.ts          # Utility functions
│   └── pages/               # Page components
├── scripts/
│   ├── seo.config.json      # SEO and project metadata
│   └── inject-jsonld.mjs    # Automatic JSON-LD injection
└── dist/                    # Build output directory
```

## 🚀 SEO Features

- **Structured Data**: Automatic JSON-LD injection for rich snippets
- **Meta Optimization**: Complete Open Graph and Twitter Card support
- **Sitemap Generation**: Automated site structure for search engines
- **Mobile-First**: Responsive design with mobile optimization
- **Performance**: Optimized build with code splitting

## How can I deploy this project?

Build the project and deploy to your preferred hosting platform:

```sh
npm run build
```

Then deploy the `dist` folder to your hosting service.

## Can I connect a custom domain to my project?

Yes, you can!

To connect a custom domain, configure your hosting platform's domain settings and update your DNS records to point to your hosting service.
