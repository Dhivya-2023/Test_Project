import { useEffect, useState } from "react";

const ITEMS = [
  { image: "/why/plumbing.webp" },
  { image: "/why/electricals.webp" },
  { image: "/why/tools.webp" },
  { image: "/why/fans.webp" },
  { image: "/why/digital.webp" },
];

export default function WhyChooseUs() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  // 🔁 Detect screen size
  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setVisible(1);
        setIsMobile(true);
      } else if (window.innerWidth < 1024) {
        setVisible(2);
        setIsMobile(false);
      } else {
        setVisible(3);
        setIsMobile(false);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // 🔁 Loop-safe items
  const items = [...ITEMS, ...ITEMS];
  const maxIndex = ITEMS.length;

  const next = () => {
    setIndex((prev) => (prev + 1 >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? maxIndex - 1 : prev - 1));
  };

  const translate = (index * 100) / visible;

  return (
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-12 bg-red-600" />
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Why Choose Us
            </h2>
          </div>

          {/* RESPONSIVE SUBTITLE */}
          <p className="text-sm font-bold text-black sm:text-right">
            Genuine Brands. Bulk Stock. Site-Ready Delivery.
          </p>
        </div>

        {/* ================= MOBILE VIEW (VERTICAL) ================= */}
        {isMobile ? (
          <div className="space-y-6">
            {ITEMS.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-md">
                <img
                  src={item.image}
                  alt=""
                  className="h-[460px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          /* ================= DESKTOP / TABLET CAROUSEL ================= */
          <div className="relative flex items-center gap-4">

            {/* LEFT ARROW (OUTSIDE) */}
            <button
              onClick={prev}
              className="h-12 w-12 rounded-full border border-gray-300
                         flex items-center justify-center text-2xl
                         hover:text-red-600 transition"
            >
              ‹
            </button>

            {/* SLIDER */}
            <div className="relative overflow-hidden flex-1">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${translate}%)` }}
              >
                {items.map((item, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 px-2"
                    style={{ width: `${100 / visible}%` }}
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={item.image}
                        alt=""
                        className="h-[300px] sm:h-[360px] lg:h-[460px] w-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT ARROW (OUTSIDE) */}
            <button
              onClick={next}
              className="h-12 w-12 rounded-full border border-gray-300
                         flex items-center justify-center text-2xl
                         hover:text-red-600 transition"
            >
              ›
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            className="bg-red-600 px-10 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white
                       transition-all duration-200 ease-out
                       hover:bg-red-700 hover:-translate-y-0.5
                       hover:shadow-[0_12px_32px_rgba(220,38,38,0.45)]"
          >
            Download Our Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
