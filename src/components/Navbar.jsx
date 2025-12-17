// src/components/Navbar.jsx
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-10 bg-white/80 backdrop-blur shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 md:py-3 lg:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Ambrajee Electricals"
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium">
          <a
            href="#products"
            className="transition-colors duration-150 hover:text-red-600"
          >
            Product Categories
          </a>
          <a
            href="#brands"
            className="transition-colors duration-150 hover:text-red-600"
          >
            Brands
          </a>
          <a
            href="#industries"
            className="transition-colors duration-150 hover:text-red-600"
          >
            Industries We Serve
          </a>
        </div>

        {/* CTA buttons (desktop / tablet) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="relative overflow-hidden border border-red-600 px-5 py-2.5
                       text-xs sm:text-sm font-semibold text-red-600
                       transition-all duration-200 ease-out
                       hover:bg-red-50 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(220,38,38,0.25)]
                       active:translate-y-0 active:shadow-none"
          >
            Contact Us Today
          </button>

          <button
            className="relative overflow-hidden  bg-red-600 px-5 py-2.5
                       text-xs sm:text-sm font-semibold text-white
                       transition-all duration-200 ease-out
                       hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(220,38,38,0.35)]
                       active:translate-y-0 active:shadow-none"
          >
            Get Direction
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-800
                     hover:bg-gray-100 transition-colors duration-150"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-200 ${
                open ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden origin-top animate-[fadeDown_0.2s_ease-out] bg-white/95 backdrop-blur shadow-sm">
          <div className="space-y-1 px-4 pb-4 pt-2 text-sm font-medium">
            <a href="#products" className="block py-2">
              Product Categories
            </a>
            <a href="#brands" className="block py-2">
              Brands
            </a>
            <a href="#industries" className="block py-2">
              Industries We Serve
            </a>

            <div className="mt-3 flex flex-col gap-2">
              <button
                className="relative overflow-hidden rounded-full border border-red-600 px-4 py-2
                           text-xs font-semibold text-red-600
                           transition-all duration-200 ease-out
                           hover:bg-red-50 hover:-translate-y-0.5 hover:shadow-md
                           active:translate-y-0 active:shadow-none"
              >
                Contact Us Today
              </button>

              <button
                className="relative overflow-hidden rounded-full bg-red-600 px-4 py-2
                           text-xs font-semibold text-white
                           transition-all duration-200 ease-out
                           hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-md
                           active:translate-y-0 active:shadow-none"
              >
                Get Direction
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
