import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import banner4 from "../../../assets/images/banner/banner4.jpg";

const Banner = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const images = [banner1, banner2, banner3, banner4];

  const content = [
    {
      title: (
        <>
          best <span className="text-sky-500">friend with</span> <br /> happy
          time
        </>
      ),
      desc: "Cats are small, carnivorous mammals known for their agility and grace. They make delightful companions.",
    },
    {
      title: (
        <>
          Urban Companions <br />{" "}
          <span className="text-sky-600">The Resilient Beauty</span>
        </>
      ),
      desc: "Pigeons: Graceful urban dwellers known for their adaptability and iridescent feathers.",
    },
    {
      title: (
        <>
          Loyal Companions <br />{" "}
          <span className="text-sky-600">Heart and Soul</span>
        </>
      ),
      desc: "Dogs are known for their loyalty and unconditional love, making them the perfect family companion.",
    },
    {
      title: (
        <>
          The Charm and <br /> <span className="text-sky-600">Grace of</span>{" "}
          Rabbits
        </>
      ),
      desc: "Gentle and curious creatures that bring joy and nature's touch into your home.",
    },
  ];

  // Auto Play logic
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page]);

  const paginate = (newDirection) => {
    let nextStep = page + newDirection;
    if (nextStep < 0) nextStep = images.length - 1;
    if (nextStep >= images.length) nextStep = 0;
    setPage([nextStep, newDirection]);
  };

  // Smooth Slide Animation Variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-24 overflow-hidden">
      <div className="relative w-full h-[450px] md:h-[600px] overflow-hidden shadow-2xl bg-black">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.5 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image */}
            <img
              src={images[page]}
              className="w-full h-full object-cover"
              alt="Banner"
            />

            {/* Overlay & Content */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full md:w-2/3 ml-6 md:ml-12 text-white space-y-4 md:space-y-6"
              >
                <h2 className="text-3xl md:text-6xl font-serif capitalize font-bold leading-tight">
                  {content[page].title}
                </h2>
                <p className="text-sm md:text-lg text-gray-200 max-w-md">
                  {content[page].desc}
                </p>
                <div className="flex gap-4">
                  <button className="btn btn-secondary border-none px-6">
                    Book Appointment
                  </button>
                  <button className="btn bg-sky-500 hover:bg-sky-600 border-none text-white px-6">
                    Explore More
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Custom Navigation Buttons */}
        <div className="absolute flex justify-end gap-4 bottom-5 right-5 md:bottom-10 md:right-12 z-20">
          <button
            onClick={() => paginate(-1)}
            className="btn btn-circle bg-white/20 border-none text-white hover:bg-sky-500 backdrop-blur-md"
          >
            ❮
          </button>
          <button
            onClick={() => paginate(1)}
            className="btn btn-circle bg-sky-500 border-none text-white hover:bg-sky-600 shadow-lg"
          >
            ❯
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all ${
                index === page ? "bg-sky-500 w-6" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
