import { useEffect, useState } from "react";
import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import banner4 from "../../../assets/images/banner/banner4.jpg";

const Banner = () => {
  const [page, setPage] = useState(0);
  const images = [banner1, banner2, banner3, banner4];

  const content = [
    {
      title: (
        <>
          Best <span className="text-sky-400">Friend With</span> <br /> Happy
          Time
        </>
      ),
      desc: "Cats are small, carnivorous mammals known for their agility and grace. They make delightful companions.",
    },
    {
      title: (
        <>
          Urban <span className="text-sky-400">Companions</span> <br />{" "}
          Resilient Beauty
        </>
      ),
      desc: "Pigeons: Graceful urban dwellers known for their adaptability and iridescent feathers.",
    },
    {
      title: (
        <>
          Loyal <span className="text-sky-400">Companions</span> <br /> Heart
          and Soul
        </>
      ),
      desc: "Dogs are known for their loyalty and unconditional love, making them the perfect family companion.",
    },
    {
      title: (
        <>
          The Charm <span className="text-sky-400">and Grace</span> <br /> of
          Rabbits
        </>
      ),
      desc: "Gentle and curious creatures that bring joy and nature's touch into your home.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1 === images.length ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPage = (index) => setPage(index);

  return (
    // Mobile-e full width rakhar jonno 'px-0' use kora hoyeche, desktop-e 'px-4'
    <div className="max-w-screen-xl mx-auto px-0 md:px-4 mt-16 md:mt-24">
      {/* Mobile Height fixed to 400px, Desktop 600px */}
      <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden shadow-xl bg-slate-900 md:rounded-3xl">
        {/* Background Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={images[page]}
            className="w-full h-full object-cover opacity-50 md:opacity-60"
            alt="Banner"
          />
          {/* Overlay Gradient: Mobile-e arektu dark rakha hoyeche content clear rakhar jonno */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="relative h-full flex items-center px-6 md:px-16">
          <div className="max-w-2xl text-white space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-7xl font-serif font-extrabold leading-tight capitalize">
              {content[page].title}
            </h2>
            <p className="text-sm md:text-xl text-slate-300 leading-relaxed max-w-md line-clamp-3 md:line-clamp-none">
              {content[page].desc}
            </p>

            {/* Fixed Buttons for Mobile & Desktop */}
            <div className="flex flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <button className="flex-1 md:flex-none px-4 md:px-8 py-3 bg-sky-500 hover:bg-sky-600 text-white text-xs md:text-base font-bold rounded-lg md:rounded-xl transition-all active:scale-95 shadow-lg shadow-sky-500/20">
                Book Appointment
              </button>
              <button className="flex-1 md:flex-none px-4 md:px-8 py-3 bg-white/10 hover:bg-white/20 text-white text-xs md:text-base font-bold rounded-lg md:rounded-xl backdrop-blur-md border border-white/20 transition-all active:scale-95">
                Explore More
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Arrows (Hidden on Mobile) */}
        <div className="absolute hidden md:flex gap-3 bottom-10 right-12 z-20">
          <button
            onClick={() => goToPage(page === 0 ? images.length - 1 : page - 1)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-sky-500 text-white border border-white/20 transition-all"
          >
            ❮
          </button>
          <button
            onClick={() => goToPage(page === images.length - 1 ? 0 : page + 1)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-sky-500 hover:bg-sky-600 text-white shadow-lg transition-all"
          >
            ❯
          </button>
        </div>

        {/* Indicators: Mobile-e center kora hoyeche */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-16 flex gap-2 md:gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === page
                  ? "bg-sky-400 w-8 md:w-10"
                  : "bg-white/30 w-3 md:w-4"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
