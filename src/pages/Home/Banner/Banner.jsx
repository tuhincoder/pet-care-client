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
      desc: "Cats are small, carnivorous mammals known for their agility and grace. They make delightful companions for your home.",
    },
    {
      title: (
        <>
          Urban Companions <br />{" "}
          <span className="text-sky-400">The Resilient Beauty</span>
        </>
      ),
      desc: "Pigeons: Graceful urban dwellers known for their adaptability and iridescent feathers.",
    },
    {
      title: (
        <>
          Loyal Companions <br />{" "}
          <span className="text-sky-400">Heart and Soul</span>
        </>
      ),
      desc: "Dogs are known for their loyalty and unconditional love, making them the perfect family companion.",
    },
    {
      title: (
        <>
          The Charm and <br /> <span className="text-sky-400">Grace of</span>{" "}
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

  const goToPage = (index) => {
    setPage(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-24">
      <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden shadow-xl bg-slate-900 ">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={images[page]}
            className="w-full h-full object-cover opacity-60"
            alt="Banner"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="relative h-full flex items-center px-6 md:px-16">
          <div className="max-w-2xl text-white space-y-6">
            <h2 className="text-4xl md:text-7xl font-serif font-extrabold leading-[1.1] capitalize">
              {content[page].title}
            </h2>
            <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-lg">
              {content[page].desc}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20 active:scale-95">
                Book Appointment
              </button>
              <button className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/10 transition-all active:scale-95">
                Explore More
              </button>
            </div>
          </div>
        </div>

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

        {/* Indicators / Progress Dots */}
        <div className="absolute bottom-8 left-6 md:left-16 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === page
                  ? "bg-sky-400 w-10"
                  : "bg-white/30 w-4 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
