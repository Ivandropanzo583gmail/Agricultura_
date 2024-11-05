import Image from "next/image";
import Casa from "./components/Casa";
import AboutUs from "./components/AboutUs"
import  Our_Products from "./components/Our_Products"
import ValuesSection from "./components/Our"
import Citacion from "./components/Citacion"
import  PartnersSection from "./components/PartnersSection"
import SignUpSection from "./components/SignUpSection"
import FeedbackAndFAQSection from "./components/FeedbackAndFAQSection"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div>
      <Casa />
      <AboutUs />
      <Our_Products />
      <ValuesSection />
      <Citacion />
      < PartnersSection />
      <SignUpSection />
      <FeedbackAndFAQSection />
      <Footer />
      
      
    </div>
  );
}
