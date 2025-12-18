


// import { useState } from "react";
// import { motion } from "framer-motion";

// const INDUSTRIES = [
//   {
//     title: "Commercial Buildings",
//     description:
//       "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
//     image: "/industries/commercial.webp",
//   },
//   {
//     title: "Contractors & Builders",
//     description:
//       "Your go-to supply partner for large-scale construction projects—wires, pipes, switches, panels, and everything in between. Bulk deals and dependable delivery timelines.",
//     image: "/industries/contractors.webp",
//   },
//   {
//     title: "Healthcare Facilities",
//     description:
//       "Hospitals and labs require reliable electrical performance and backup systems. We offer MCBs, control panels, and fittings compliant with high-precision environments.",
//     image: "/industries/health.webp",
//   },
//   {
//     title: "Infrastructure Projects",
//     description:
//       "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
//     image: "/industries/infrastructure.webp",
//   },
//    {
//     title: "Contractors & Builders",
//     description:
//       "For metro, highway, and smart city works—find rugged cabling, outdoor floodlights, and panel boards designed to perform in open-site conditions.",
//     image: "/industries/builders.webp",
//   },
//   {
//     title: "Co Working Space",
//     description:
//       "Shared workspaces require safe, efficient fittings. We provide lighting, switches, sockets, fans, and plumbing essentials tailored for co-working infrastructure.",
//     image: "/industries/working.webp",
//   },
//   {
//     title: "Architect & Interiors",
//     description:
//       "We support designers with stylish lights, modular switches, concealed boxes, and ceiling fans — ideal for modern, functional and aesthetic interior setups.",
//     image: "/industries/interior.webp",
//   },
//     {
//     title: "MEP Contractor",
//     description:
//       "We supply certified wires, switchgear, digital meters, pipes, and DB boxes — all trusted by MEP contractors for bulk supply and project readiness.",
//     image: "/industries/mep.webp",
//   },
//   {
//     title: "Manufacturing Industries",
//     description:
//       "Factories and warehouses require high-load support. We offer industrial-grade fans, cables, isolators, and plumbing materials for demanding applications.",
//     image: "/industries/manufacturing.webp",
//   },
// ];

// export default function Industries() {
//   const ITEMS_PER_PAGE = 3;
//   const totalPages = Math.ceil(INDUSTRIES.length / ITEMS_PER_PAGE);
//   const [page, setPage] = useState(0);

//   const handlePrev = () => {
//     setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section id="industries" className="bg-white py-16">
//       <div className="mx-auto max-w-7xl px-4">
        
//         {/* HEADER */}
       
//          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
//           <div className="flex items-center gap-3">
//             <span className="h-[3px] w-12 bg-red-600" />
//             <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
//               Industries We Serve
//             </h2>
//           </div>

//           {/* RESPONSIVE SUBTITLE */}
//           <p className="text-sm font-bold text-black sm:text-right">
//           Reliable supply for every sector&apos;s demands.
//           </p>
//         </div>

//         {/* CAROUSEL */}
//         <div className="relative flex items-center px-16">

//           {/* PREVIOUS ARROW */}
//          <motion.button
//   onClick={handlePrev}
//   whileHover={{ scale: 1.2, x: -4 }}
//   whileTap={{ scale: 0.9 }}
//   className="absolute left-0 text-5xl font-light text-gray-500 hover:text-red-600"
//   aria-label="Previous"
// >
//   ‹
// </motion.button>


//           {/* SLIDES */}
//           <div className="overflow-hidden w-full">
//             <motion.div
//   className="flex"
//   animate={{ x: `-${page * 100}%` }}
//   transition={{
//     type: "spring",
//     stiffness: 90,
//     damping: 18,
//   }}
// >

//               {INDUSTRIES.map((item) => (
//                <motion.article
//   key={item.title}
//   className="w-full flex-shrink-0 lg:w-1/3 px-3"
//   initial={{ opacity: 0.8, scale: 0.96 }}
//   animate={{ opacity: 1, scale: 1 }}
//   transition={{ duration: 0.4 }}
//   whileHover={{
//     y: -10,
//     rotateX: 4,
//     rotateY: -4,
//   }}
//   style={{ transformStyle: "preserve-3d" }}
// >

//                   <div className="bg-gray-50">
//                     <div className="h-56 overflow-hidden">
//                      <motion.img
//   src={item.image}
//   alt={item.title}
//   className="h-full w-full object-cover"
//   whileHover={{ scale: 1.08 }}
//   transition={{ duration: 0.6, ease: "easeOut" }}
// />

//                     </div>

//                     <div className="px-6 py-5">
//                       <h3 className="mb-2 text-lg font-semibold text-gray-900">
//                         {item.title}
//                       </h3>
//                       <p className="text-sm text-gray-500 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.article>
//               ))}
//             </motion.div>
//           </div>

//           {/* NEXT ARROW */}
//           <motion.button
//   onClick={handleNext}
//   whileHover={{ scale: 1.2, x: 4 }}
//   whileTap={{ scale: 0.9 }}
//   className="absolute right-0 text-5xl font-light text-gray-500 hover:text-red-600"
//   aria-label="Next"
// >
//   ›
// </motion.button>


//         </div>
//       </div>
//     </section>
//   );
// }






import { useState, useEffect } from "react";
import { motion } from "framer-motion";


const INDUSTRIES = [
  {
    title: "Commercial Buildings",
    description:
      "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
    image: "/industries/commercial.webp",
  },
  {
    title: "Contractors & Builders",
    description:
      "Your go-to supply partner for large-scale construction projects—wires, pipes, switches, panels, and everything in between. Bulk deals and dependable delivery timelines.",
    image: "/industries/contractors.webp",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Hospitals and labs require reliable electrical performance and backup systems. We offer MCBs, control panels, and fittings compliant with high-precision environments.",
    image: "/industries/health.webp",
  },
  {
    title: "Infrastructure Projects",
    description:
      "Offices, retail spaces, and malls need efficient electrical and plumbing setups. We supply modular fittings, lighting solutions, DB boxes, and energy meters tailored for commercial loads.",
    image: "/industries/infrastructure.webp",
  },
   {
    title: "Contractors & Builders",
    description:
      "For metro, highway, and smart city works—find rugged cabling, outdoor floodlights, and panel boards designed to perform in open-site conditions.",
    image: "/industries/builders.webp",
  },
  {
    title: "Co Working Space",
    description:
      "Shared workspaces require safe, efficient fittings. We provide lighting, switches, sockets, fans, and plumbing essentials tailored for co-working infrastructure.",
    image: "/industries/working.webp",
  },
  {
    title: "Architect & Interiors",
    description:
      "We support designers with stylish lights, modular switches, concealed boxes, and ceiling fans — ideal for modern, functional and aesthetic interior setups.",
    image: "/industries/interior.webp",
  },
    {
    title: "MEP Contractor",
    description:
      "We supply certified wires, switchgear, digital meters, pipes, and DB boxes — all trusted by MEP contractors for bulk supply and project readiness.",
    image: "/industries/mep.webp",
  },
  {
    title: "Manufacturing Industries",
    description:
      "Factories and warehouses require high-load support. We offer industrial-grade fans, cables, isolators, and plumbing materials for demanding applications.",
    image: "/industries/manufacturing.webp",
  },
];

export default function Industries() {
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  /* ✅ Detect screen size */
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(INDUSTRIES.length / itemsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleItems = INDUSTRIES.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

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
          <p className="text-sm font-bold text-black sm:text-right">
            Reliable supply for every sector&apos;s demands.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative flex items-center">

          {/* PREV */}
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.2, x: -4 }}
            className="absolute left-0 z-10 text-4xl text-gray-500 hover:text-red-600"
          >
            ‹
          </motion.button>

          {/* SLIDES */}
          <div className="mx-auto w-full overflow-hidden px-10">
            <motion.div
              key={page}
              className="flex gap-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {visibleItems.map((item) => (
                <motion.article
                  key={item.title}
                  className="w-full lg:w-1/3 bg-gray-50"
                  whileHover={{ y: -10 }}
                >
                  <div className="h-56 overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                    />
                  </div>
                  <div className="px-6 py-5">
                    <h3 className="mb-2 text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>

          {/* NEXT */}
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.2, x: 4 }}
            className="absolute right-0 z-10 text-4xl text-gray-500 hover:text-red-600"
          >
            ›
          </motion.button>

        </div>
      </div>
    </section>
  );
}
