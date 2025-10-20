// Server component: only composes sections
import Hero from "../components/sections/Hero";
import Ecv from "../components/sections/Ecv";
import Skills from "../components/sections/Skills";
import Qualifications from "../components/sections/Qualifications";
import Services from "../components/sections/Services";
import PortfolioCarousel from "../components/sections/PortfolioCarousel";
import ContactForm from "../components/sections/ContactForm";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <main className="font-sans bg-white text-gray-800">
      <Hero />
      <Ecv />
      <Skills />
      <Qualifications />
      <Services />
      <PortfolioCarousel />
      <ContactForm />
      <Footer />
    </main>
  );
}
