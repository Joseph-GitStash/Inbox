
import About from "@/components/Projects/About";
import Banner from "@/components/Projects/Banner";
import Faqs from "@/components/Projects/Faqs";
import Footer from "@/components/Projects/Footer";
import Hero from "@/components/Projects/Hero";

export default function Home() {

  return (
    <main className="">
      <Banner />
      <Hero />
      <About />
      <Faqs />
      <Footer />
    </main> 
  );
}
