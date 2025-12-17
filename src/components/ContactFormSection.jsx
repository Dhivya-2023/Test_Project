// src/components/ContactFormSection.jsx
import { MapPin, Phone, PhoneCall } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Heading */}
        <div className="mb-8 flex items-center gap-3">
          <span className="h-[2px] w-10 bg-red-600 md:w-14" />
          <h2 className="text-[26px] font-extrabold tracking-tight text-gray-900 sm:text-[30px]">
            Tell Us What You Need
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)] md:items-start">
          {/* Left: copy + contact info */}
          <div className="space-y-8">
            <p className="max-w-xl text-[15px] leading-relaxed text-gray-800">
              We&apos;re just one call or form away. Let&apos;s get your
              materials moving.
            </p>

            <div className="space-y-7 text-[15px] text-gray-900">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center  text-red-600">
                  <MapPin className="h-8 w-8" />
                </div>
                <p className="leading-relaxed text-lg">
                  75, Godown Street, Flower Bazaar, PARRY&apos;S, George Town,
                  Chennai, Tamil Nadu 600001
                </p>
              </div>

              {/* Mobile numbers */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center text-red-600">
                  <PhoneCall className="h-8 w-8" />
                </div>
                <p className="text-lg">+91 99626 22633 / +91 99628 19851</p>
              </div>

              {/* Landline */}
              <div className="flex items-start gap-4">
                <div className="mt-1 flex h-9 w-9 items-center justify-center text-red-600">
                  <Phone className="h-8 w-8" />
                </div>
                <p className="text-lg">044-42166030</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form className="space-y-4">
            {["Name*", "Phone Number*", "Email", "Service"].map(
              (placeholder) => (
                <input
                  key={placeholder}
                  type="text"
                  placeholder={placeholder}
                  required={placeholder.includes("*")}
                  className="w-full border border-gray-200 bg-white px-4 py-3.5 text-[14px]
                             tracking-wide text-gray-900 outline-none
                             shadow-sm focus:border-red-500 focus:ring-1 focus:ring-red-500"
                />
              )
            )}

            <button
              type="submit"
              className="mt-5 w-full  bg-red-600 px-6 py-3.5 text-[13px] font-semibold
                         uppercase tracking-[0.18em] text-white
                         transition-all duration-200 ease-out
                         hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(220,38,38,0.45)]
                         active:translate-y-0 active:shadow-none"
            >
              Submit your details
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
