import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProductCategories from "./components/ProductCategories";
import Brands from "./components/Brands";
import Industries from "./components/Industries.jsx"
import WhyChooseUs from "./components/WhyChooseUs.jsx"
import Testimonials from "./components/Testimonials.jsx"
import ContactFormSection from "./components/ContactFormSection.jsx"
import Footer from "./components/Footer.jsx"
import FloatingActions from "./components/FloatingActions.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar is fixed, so add top padding to content */}
      <Navbar />
      <main className="pt-16">
        <Hero />
<ProductCategories />
        <Brands/>
          <Industries/>
          <WhyChooseUs/>
        
<Testimonials/>
<ContactFormSection/>
<Footer/>
        <FloatingActions />
      </main>
    </div>
  );
}

export default App;
