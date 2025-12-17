// src/App.jsx or src/pages/Home.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero fills first screen; below this you can add sections for products, brands, etc. */}
      <Hero />
      {/* Other sections */}
      <main className="bg-white">
        <section id="products" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          {/* product cards here */}
        </section>
      </main>
    </div>
  );
}
