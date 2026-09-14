
import Hero from "./components/portfolio/Hero";
import About from "./components/portfolio/About";
import TechStack from "./components/portfolio/TechStack";
import Projects from "./components/portfolio/Projects";
import Service from "./components/portfolio/Services";
import WhyMe from "./components/portfolio/WhyMe";
import CtaSection from "./components/portfolio/CtaSection";
import Footer from "./components/portfolio/Footer";
export default function Home() {
  return (
  <>
    <Hero />
    <About />
    <TechStack />
    <Projects />
    <Service />
    <WhyMe />
    <CtaSection />
    <Footer />
  </>
 
  );
}
