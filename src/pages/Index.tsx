
import Layout from '../components/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Blog from '../components/sections/Blog';
import Contact from '../components/sections/Contact';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
    </Layout>
  );
};

export default Index;
