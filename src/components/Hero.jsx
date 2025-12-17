// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative bg-white md:pt-2 lg:pt-6 sm:pt-2">
      {/* Desktop / tablet: horizontal hero, edge‑to‑edge */}
      <div className="hidden md:block">
        <div className="relative h-[360px] lg:h-[420px] xl:h-[660px] overflow-hidden">
          <img
            src="/banner1.jpg" // wide image with text
            alt="One Reliable Source for Everything Your Project Demands"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>

      {/* Mobile: vertical hero */}
      <div className="block md:hidden  ">
        <div className="relative h-[520px] overflow-hidden ">
          <img
            src="/banner.png" // tall version with text (or reuse same image)
            alt="One Reliable Source for Everything Your Project Demands"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
