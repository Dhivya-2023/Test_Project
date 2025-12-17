// src/components/ProductCategories.jsx
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";



const CATEGORIES = [
  {
    title: "Wires & Cables",
    description:
      "Branded copper wires, flexible cables, control cables, and more — for residential and industrial use.",
    icon: "/icons/cable.png",
  },
  {
    title: "Switchgears",
    description:
      "MCCBs, isolators, MCBs, DB boxes, and panel boards from top-rated brands.",
    icon: "/icons/db.png",
  },
  {
    title: "Switches",
    description:
      "Modular switches, sockets, and accessories — ideal for modern interiors and commercial spaces.",
    icon: "/icons/light.png",
  },
  {
    title: "LED Profile & Lights",
    description:
      "Ceiling lights, panels, floods, and decorative fixtures for every application.",
    icon: "/icons/lightbulb.png",
  },
  {
    title: "Instruments & Meters",
    description:
      "Digital meters, voltmeters, ammeters, timers, and energy monitoring devices.",
    icon: "/icons/digital.png",
  },
  {
    title: "Tools",
    description:
      "Power tools, hand tools, drill bits, and accessories for electrical installation.",
    icon: "/icons/tools.png",
  },
  {
    title: "Hardware",
    description:
      "Fasteners, clamps, supports, and accessories for secure electrical installations.",
    icon: "/icons/cpu.png",
  },
  {
    title: "Plumbing",
    description:
      "CPVC pipes, taps, valves, and fittings for domestic, commercial, and project use.",
    icon: "/icons/pipes.png",
  },
];

export default function ProductCategories() {
  const sectionRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-30, 30], [8, -8]);
  const rotateY = useTransform(x, [-30, 30], [-8, 8]);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = Array.from(
      section.querySelectorAll("[data-animate='card']")
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-6");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">

  <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-12 bg-red-600" />
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Product Categories
            </h2>
          </div>

          {/* RESPONSIVE SUBTITLE */}
          <p className="text-sm font-bold text-black sm:text-right">
           Explore Our Full Range of Certified Electrical Supplies
          </p>
        </div>
        {/* Cards grid */}
        <motion.div
  animate={{ y: [0, -4, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"
>

        {/* <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-4"> */}
          {CATEGORIES.map((cat, index) => (
            
          <motion.article
      key={cat.title}
      data-animate="card"
      initial={{ scale: 0.92, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // custom cubic bezier
        delay: index * 0.06,
      }}
      style={{ x, y, rotateX, rotateY }}
      whileHover={{ scale: 1.04 }}
      onMouseMove={e => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX / 6);
        y.set(offsetY / 6);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="group relative flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 px-12 py-12 text-center
                 shadow-sm transition-all duration-300
                 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >

              {/* Icon circle */}
        <motion.div
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{
    delay: 0.3 + index * 0.05,
    type: "spring",
    stiffness: 220,
    damping: 14,
  }}
  whileHover={{ scale: 1.2, rotate: 8 }}
  className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-red-500
             bg-white group-hover:bg-red-100"
>
  <img src={cat.icon} alt={cat.title} className="h-8 w-8" />
</motion.div>





              <h3 className="mb-2 text-sm font-semibold text-gray-900 sm:text-base">
                {cat.title}
              </h3>

              <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
                {cat.description}
              </p>
            </motion.article>
          ))}
        {/* </div> */}
     </motion.div>
      </div>
    </section>
  );
}
