import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductsOverview from "@/components/ProductsOverview";
import BluefishSection from "@/components/sections/BluefishSection";
import BlueWhaleSection from "@/components/sections/BlueWhaleSection";
import TruckingSection from "@/components/sections/TruckingSection";
import APISection from "@/components/sections/APISection";
import AISection from "@/components/sections/AISection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ProductsOverview />
      <BluefishSection />
      <BlueWhaleSection />
      <TruckingSection />
      <APISection />
      <AISection />
      <Footer />
    </div>
  );
};

export default Index;
