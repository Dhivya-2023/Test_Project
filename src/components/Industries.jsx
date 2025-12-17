// // src/components/Industries.jsx
// import { useState } from "react";

// const INDUSTRIES = [
//   {
//     title: "Commercial Buildings",
//     description:
//       "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
//     image: "/industries/commercial.png",
//   },
//   {
//     title: "Contractors & Builders",
//     description:
//       "Your go-to supply partner for large-scale construction projects—wires, pipes, switches, panels, and everything in between. Bulk deals and dependable delivery timelines.",
//     image: "/industries/contractors.png",
//   },
//   {
//     title: "Healthcare Facilities",
//     description:
//       "Hospitals and labs require reliable electrical performance and backup systems. We offer MCBs, control panels, and fittings compliant with high-precision environments.",
//     image: "/industries/health.png",
//   },
//   {
//     title: "Infrastructure Projects",
//     description:
//       "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
//     image: "/industries/infrastructure.png",
//   },
//    {
//     title: "Contractors & Builders",
//     description:
//       "For metro, highway, and smart city works—find rugged cabling, outdoor floodlights, and panel boards designed to perform in open-site conditions.",
//     image: "/industries/builders.png",
//   },
//   {
//     title: "Co Working Space",
//     description:
//       "Shared workspaces require safe, efficient fittings. We provide lighting, switches, sockets, fans, and plumbing essentials tailored for co-working infrastructure.",
//     image: "/industries/working.png",
//   },
//   {
//     title: "Architect & Interiors",
//     description:
//       "We support designers with stylish lights, modular switches, concealed boxes, and ceiling fans — ideal for modern, functional and aesthetic interior setups.",
//     image: "/industries/interior.png",
//   },
//     {
//     title: "MEP Contractor",
//     description:
//       "We supply certified wires, switchgear, digital meters, pipes, and DB boxes — all trusted by MEP contractors for bulk supply and project readiness.",
//     image: "/industries/mep.png",
//   },
//   {
//     title: "Manufacturing Industries",
//     description:
//       "Factories and warehouses require high-load support. We offer industrial-grade fans, cables, isolators, and plumbing materials for demanding applications.",
//     image: "/industries/manufacturing.png",
//   },
// ];

// export default function Industries() {
//   const [index, setIndex] = useState(0);

//   // how many cards visible based on screen
//   const visibleCount = 3; // layout uses responsive widths instead

//   const maxIndex = INDUSTRIES.length - 1;

//   const handlePrev = () => {
//     setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
//   };

//   const handleNext = () => {
//     setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
//   };

//   return (
//     <section id="industries" className="bg-white py-12 sm:py-16 lg:py-20">
//       <div className="mx-auto max-w-7xl px-4 md:px-6">
//         {/* Heading row */}
//         <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
//           <div className="space-y-3">
          
//              <div className="mb-12 flex items-center gap-3">
//           <span className="h-[4px] w-14 bg-red-600" />
//           <h2 className="text-5xl font-extrabold text-black">
//              Industries We Serve
//           </h2>
//         </div>
//           </div>
//           <p className="max-w-md text-md font-bold text-black md:text-right">
//             Reliable supply for every sector&apos;s demands.
//           </p>
//         </div>

//         {/* Carousel wrapper */}
//         <div className="relative">
//           {/* Slides container */}
//           <div className="overflow-hidden  bg-transparent">
//             <div
//               className="flex transition-transform duration-500 ease-out"
//               style={{ transform: `translateX(-${index * 100}%)` }}
//             >
//               {INDUSTRIES.map((item) => (
//                 <article
//                   key={item.title}
//                   className="flex w-full flex-shrink-0 flex-col  
//                              sm:w-full md:w-1/2 lg:w-1/3 md:mx-2 lg:mx-3 bg-gray-50 p-4"
//                 >
//                   <div className="relative h-52 overflow-hidden  sm:h-56 lg:h-60">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>
//                   <div className="px-6 py-5 sm:px-7 sm:py-6">
//                     <h3 className="mb-2 text-base font-semibold text-gray-900 sm:text-lg">
//                       {item.title}
//                     </h3>
//                     <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
//                       {item.description}
//                     </p>
//                   </div>
//                 </article>
//               ))}
//             </div>
//           </div>

//           {/* Left arrow */}
//           <button
//             onClick={handlePrev}
//             className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1/2
//                        flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white
//                        text-gray-700 shadow-sm transition hover:border-red-500 hover:text-red-600"
//             aria-label="Previous industry"
//           >
//             ‹
//           </button>

//           {/* Right arrow */}
//           <button
//             onClick={handleNext}
//             className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1/2
//                        flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white
//                        text-gray-700 shadow-sm transition hover:border-red-500 hover:text-red-600"
//             aria-label="Next industry"
//           >
//             ›
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
   

// src/components/Industries.jsx


import { useState } from "react";
import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    title: "Commercial Buildings",
    description:
      "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
    image: "/industries/commercial.png",
  },
  {
    title: "Contractors & Builders",
    description:
      "Your go-to supply partner for large-scale construction projects—wires, pipes, switches, panels, and everything in between. Bulk deals and dependable delivery timelines.",
    image: "/industries/contractors.png",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Hospitals and labs require reliable electrical performance and backup systems. We offer MCBs, control panels, and fittings compliant with high-precision environments.",
    image: "/industries/health.png",
  },
  {
    title: "Infrastructure Projects",
    description:
      "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
    image: "/industries/infrastructure.png",
  },
   {
    title: "Contractors & Builders",
    description:
      "For metro, highway, and smart city works—find rugged cabling, outdoor floodlights, and panel boards designed to perform in open-site conditions.",
    image: "/industries/builders.png",
  },
  {
    title: "Co Working Space",
    description:
      "Shared workspaces require safe, efficient fittings. We provide lighting, switches, sockets, fans, and plumbing essentials tailored for co-working infrastructure.",
    image: "/industries/working.png",
  },
  {
    title: "Architect & Interiors",
    description:
      "We support designers with stylish lights, modular switches, concealed boxes, and ceiling fans — ideal for modern, functional and aesthetic interior setups.",
    image: "/industries/interior.png",
  },
    {
    title: "MEP Contractor",
    description:
      "We supply certified wires, switchgear, digital meters, pipes, and DB boxes — all trusted by MEP contractors for bulk supply and project readiness.",
    image: "/industries/mep.png",
  },
  {
    title: "Manufacturing Industries",
    description:
      "Factories and warehouses require high-load support. We offer industrial-grade fans, cables, isolators, and plumbing materials for demanding applications.",
    image: "/industries/manufacturing.png",
  },
];

export default function Industries() {
  const ITEMS_PER_PAGE = 3;
  const totalPages = Math.ceil(INDUSTRIES.length / ITEMS_PER_PAGE);
  const [page, setPage] = useState(0);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section id="industries" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* HEADER */}
       
         <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="h-[3px] w-12 bg-red-600" />
            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
              Industries We Serve
            </h2>
          </div>

          {/* RESPONSIVE SUBTITLE */}
          <p className="text-sm font-bold text-black sm:text-right">
          Reliable supply for every sector&apos;s demands.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center px-16">

          {/* PREVIOUS ARROW */}
         <motion.button
  onClick={handlePrev}
  whileHover={{ scale: 1.2, x: -4 }}
  whileTap={{ scale: 0.9 }}
  className="absolute left-0 text-5xl font-light text-gray-500 hover:text-red-600"
  aria-label="Previous"
>
  ‹
</motion.button>


          {/* SLIDES */}
          <div className="overflow-hidden w-full">
            <motion.div
  className="flex"
  animate={{ x: `-${page * 100}%` }}
  transition={{
    type: "spring",
    stiffness: 90,
    damping: 18,
  }}
>

              {INDUSTRIES.map((item) => (
               <motion.article
  key={item.title}
  className="w-full flex-shrink-0 lg:w-1/3 px-3"
  initial={{ opacity: 0.8, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.4 }}
  whileHover={{
    y: -10,
    rotateX: 4,
    rotateY: -4,
  }}
  style={{ transformStyle: "preserve-3d" }}
>

                  <div className="bg-gray-50">
                    <div className="h-56 overflow-hidden">
                     <motion.img
  src={item.image}
  alt={item.title}
  className="h-full w-full object-cover"
  whileHover={{ scale: 1.08 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>

                    </div>

                    <div className="px-6 py-5">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* NEXT ARROW */}
          <motion.button
  onClick={handleNext}
  whileHover={{ scale: 1.2, x: 4 }}
  whileTap={{ scale: 0.9 }}
  className="absolute right-0 text-5xl font-light text-gray-500 hover:text-red-600"
  aria-label="Next"
>
  ›
</motion.button>


        </div>
      </div>
    </section>
  );
}
