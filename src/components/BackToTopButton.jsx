import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {backToTopButton && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollUp}
          className="fixed bottom-8 right-6 z-50 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-sky-500 text-white rounded-full shadow-lg shadow-sky-200 hover:bg-slate-800 transition-colors duration-300 border-2 border-white group"
        >
          <FaArrowUp className="text-xl md:text-2xl group-hover:animate-bounce transition-all" />

          {/* Pulsing effect around button */}
          <span className="absolute inset-0 rounded-full bg-sky-400 opacity-20 animate-ping group-hover:hidden"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTopButton;
