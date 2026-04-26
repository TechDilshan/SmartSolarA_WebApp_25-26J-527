import { useEffect } from "react";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { VideoShowcase } from "@/components/site/VideoShowcase";
import { Research } from "@/components/site/Research";
import { Milestones } from "@/components/site/Milestones";
import { Documents } from "@/components/site/Documents";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { ScrollUtils } from "@/components/site/ScrollUtils";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();

  useEffect(() => {
    document.title = "Smart Solar Advisor — IoT-Based Solar Energy Forecasting";
    const desc = "An IoT + ML research project that forecasts daily and monthly solar energy generation before installation.";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement("meta"); m.setAttribute("name", "description"); document.head.appendChild(m); }
    m.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <ScrollUtils />
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <Research />
        <Milestones />
        <Documents />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
