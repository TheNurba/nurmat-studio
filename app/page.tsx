import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TechBase from "@/components/TechBase";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <TechBase />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
