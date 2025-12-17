// // src/components/Brands.jsx
// import Slider from "react-slick";

// const BRANDS = [
//   { name: "almonard", src: "/brands/almonard.jpg" },
//   { name: "anchor", src: "/brands/anchor.jpg" },
//   { name: "bajaj", src: "/brands/bajaj.jpg" },
//   { name: "crompton", src: "/brands/crompton.jpg" },
//   { name: "Dewalt", src: "/brands/Dewalt.jpg" },
//   { name: "dlink", src: "/brands/dlink.jpg" },
//   { name: "eaton", src: "/brands/eaton.jpg" },
//   { name: "ESAB", src: "/brands/ESAB.jpg" },
//   { name: "finolex", src: "/brands/finolex.jpg" },
//   { name: "havells", src: "/brands/havells.jpg" },
//   { name: "honeywell", src: "/brands/honeywell.jpg" },
//   { name: "lapp", src: "/brands/lapp.jpg" },
//   { name: "lauritz", src: "/brands/lauritz.jpg" },
//   { name: "norisys", src: "/brands/norisys.jpg" },
//   { name: "orient", src: "/brands/orient.jpg" },
//   { name: "panasonic", src: "/brands/panasonic.jpg" },
//   { name: "philips", src: "/brands/philips.jpg" },
//   { name: "polycab", src: "/brands/polycab.jpg" },
//   { name: "rexnord", src: "/brands/rexnord.jpg" },
//   { name: "rishabi", src: "/brands/rishabi.jpg" },
//   { name: "rrkabel", src: "/brands/rrkabel.jpg" },
//   { name: "scneider", src: "/brands/scneider.jpg" },
//   { name: "selec", src: "/brands/selec.jpg" },
//   { name: "siemens", src: "/brands/siemens.jpg" },
//   { name: "taparia", src: "/brands/taparia.jpg" },
//   { name: "wipro", src: "/brands/wipro.jpg" },
//   { name: "legrand", src: "/brands/legrand.jpg" },
//   { name: "lutron", src: "/brands/lutron.jpg" },
// ];

// export default function Brands() {
//   const settings = {
//     arrows: false,
//     dots: false,
//     infinite: true,
//     speed: 1000,           // duration of one full slide animation (ms)
//     autoplay: true,
//     autoplaySpeed: 0,      // required for linear continuous effect
//     cssEase: "linear",     // smooth constant speed
//     slidesToShow: 6,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 5 },
//       },
//       {
//         breakpoint: 768,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 480,
//         settings: { slidesToShow: 2 },
//       },
//     ],
//   };

//   return (
//     <section id="brands" className="bg-white py-10 sm:py-14">
//       <div className="mx-auto max-w-6xl px-4 md:px-6">
//         {/* Heading */}
//         <div className="mb-6 flex items-center gap-3">
//           <span className="h-[2px] w-10 bg-red-600 md:w-14" />
//           <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl">
//             Brands
//           </h2>
//         </div>

//         {/* Continuous slider */}
//         <Slider {...settings}>
//           {BRANDS.map((brand) => (
//             <div key={brand.name} className="flex items-center justify-center">
//               <img
//                 src={brand.src}
//                 alt={brand.name}
//                 className="h-20 w-auto object-contain sm:h-12 md:h-24 w-10"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// }





const BRANDS = [
  { name: "almonard", src: "/brands/almonard.jpg" },
  { name: "anchor", src: "/brands/anchor.jpg" },
  { name: "bajaj", src: "/brands/bajaj.jpg" },
  { name: "crompton", src: "/brands/crompton.jpg" },
  { name: "Dewalt", src: "/brands/Dewalt.jpg" },
  { name: "dlink", src: "/brands/dlink.jpg" },
  { name: "eaton", src: "/brands/eaton.jpg" },
  { name: "ESAB", src: "/brands/ESAB.jpg" },
  { name: "finolex", src: "/brands/finolex.jpg" },
  { name: "havells", src: "/brands/havells.jpg" },
  { name: "honeywell", src: "/brands/honeywell.jpg" },
  { name: "lapp", src: "/brands/lapp.jpg" },
  { name: "lauritz", src: "/brands/lauritz.jpg" },
  { name: "norisys", src: "/brands/norisys.jpg" },
  { name: "orient", src: "/brands/orient.jpg" },
  { name: "panasonic", src: "/brands/panasonic.jpg" },
  { name: "philips", src: "/brands/philips.jpg" },
  { name: "polycab", src: "/brands/polycab.jpg" },
  { name: "rexnord", src: "/brands/rexnord.jpg" },
  { name: "rishabi", src: "/brands/rishabi.jpg" },
  { name: "rrkabel", src: "/brands/rrkabel.jpg" },
  { name: "scneider", src: "/brands/scneider.jpg" },
  { name: "selec", src: "/brands/selec.jpg" },
  { name: "siemens", src: "/brands/siemens.jpg" },
  { name: "taparia", src: "/brands/taparia.jpg" },
  { name: "wipro", src: "/brands/wipro.jpg" },
  { name: "legrand", src: "/brands/legrand.jpg" },
  { name: "lutron", src: "/brands/lutron.jpg" },
];

export default function Brands() {
  return (
    <section id="brands" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-[4px] w-14 bg-red-600" />
          <h2 className="text-5xl font-extrabold text-black">
            Brands
          </h2>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden">
          <div className="brand-marquee flex items-center gap-32">
            {[...BRANDS, ...BRANDS].map((brand, index) => (
              <img
                key={index}
                src={brand.src}
                alt={brand.name}
                className="
                  h-28 md:h-32 lg:h-36
                  w-auto
                  object-contain
                  transition-transform duration-300
                "
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}