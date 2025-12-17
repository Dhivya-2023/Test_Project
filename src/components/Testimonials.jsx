import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Ramesh",
    role: "Electrical Contractor",
    rating: 5,
    text: "Na romba places la poi paathen. But finally found proper plumbing elbows, taps and couplers here.",
  },
  {
    name: "Pranav",
    role: "Facility Admin",
    rating: 5,
    text: "Got Finolex CPVC pipes and fittings. All sizes available and pricing was good.",
  },
  {
    name: "Arun",
    role: "Site Engineer",
    rating: 5,
    text: "Top shop for electrical materials. Full range of wires and switches.",
  },
  {
    name: "Vignesh",
    role: "Interior Consultant",
    rating: 5,
    text: "Sri Ambaajee la ellam ready-a irundhudhu. Billing also quick.",
  },
  {
    name: "Karthikeyan",
    role: "Project Manager",
    rating: 5,
    text: "Owner was very polite. Explained wire load properly. Reasonable pricing.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  const renderStars = (count) =>
    Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400 text-2xl">
        ★
      </span>
    ));

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <span className="h-[4px] w-16 bg-red-600" />
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Client Testimonials
            </h2>
          </div>
          <p className="text-sm text-black font-bold sm:text-base md:text-lg">
            What Our Customers Say
          </p>
        </div>

        {/* Desktop / tablet: 2 testimonials */}
        <div className="relative hidden md:grid md:grid-cols-2 md:gap-20 md:text-center">
          {[TESTIMONIALS[index], TESTIMONIALS[(index + 1) % total]].map((item, i) => (
  <div
    key={i}
    className="mx-auto flex max-w-xl flex-col items-center text-center space-y-6"
  >
    <div className="flex justify-center gap-2">
      {renderStars(item.rating)}
    </div>

    <p className="text-[28px] leading-relaxed text-gray-800">
      {item.text}
    </p>

    <div className="pt-4">
      <p className="text-xl font-semibold">{item.name}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gray-500">
        {item.role}
      </p>
    </div>
  </div>
))}


          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2
                       text-5xl font-light text-black hover:text-red-600"
            aria-label="Previous testimonial"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2
                       text-5xl font-light text-black hover:text-red-600"
            aria-label="Next testimonial"
          >
            ›
          </button>
        </div>

        {/* Mobile: 1 testimonial */}
        {/* Mobile: 1 testimonial */}
<div className="relative md:hidden">
  <div className="mx-auto max-w-xl space-y-6 text-center px-6">
    <div className="flex justify-center gap-2">
      {renderStars(TESTIMONIALS[index].rating)}
    </div>

    <p className="text-base leading-relaxed text-gray-700">
      {TESTIMONIALS[index].text}
    </p>

    <div className="pt-4">
      <p className="text-xl font-semibold">
        {TESTIMONIALS[index].name}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-gray-500">
        {TESTIMONIALS[index].role}
      </p>
    </div>
  </div>

  {/* Arrows moved lower and smaller */}
  <button
    onClick={prev}
    className="absolute left-6 bottom-3
               text-3xl font-light text-black hover:text-red-600"
    aria-label="Previous testimonial"
  >
    ‹
  </button>
  <button
    onClick={next}
    className="absolute right-6 bottom-3
               text-3xl font-light text-black hover:text-red-600"
    aria-label="Next testimonial"
  >
    ›
  </button>
</div>

      </div>
    </section>
  );
}
