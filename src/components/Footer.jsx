// src/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 px-4 py-6 text-center sm:py-8">
        <p className="text-[20px] text-gray-600">
          © {year} Sri Ambaajee Electricals – All rights reserved
        </p>
        <p className="text-[16px] text-gray-600">
          Marketed By{" "}
          <a
            href="https://profitcast.in"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-red-600 underline underline-offset-2 hover:text-red-700"
          >
            Profitcast
          </a>{" "}
          — Efficient growth, delivered.
        </p>
      </div>
    </footer>
  );
}
