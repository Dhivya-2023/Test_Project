// src/components/FloatingButtons.jsx
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const phoneNumber = "99626 22633";
  const whatsappNumber = "99626 22633"; // no + for wa.me

  return (
    <>
      {/* Call button – left bottom */}
      <div className="fixed left-4 bottom-4 z-40 flex items-center gap-2">
        {/* Round red icon */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-red-600 shadow-lg
                     hover:bg-red-700 transition-colors"
          aria-label="Call us now"
        >
          <FaPhoneAlt className="h-6 w-6 text-white" />
        </a>

        {/* Red pill label */}
        <a
          href={`tel:${phoneNumber}`}
          className="hidden sm:inline-flex items-center rounded-md bg-red-600 px-4 py-2
                     text-sm font-semibold text-white shadow-lg
                     hover:bg-red-700 transition-colors"
        >
          Call Us Now
        </a>
      </div>

      {/* WhatsApp button – right bottom */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center
                   rounded-full bg-[#25D366] shadow-lg hover:brightness-110 transition"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="h-7 w-7 text-white" />
      </a>
    </>
  );
}
