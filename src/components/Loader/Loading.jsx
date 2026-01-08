import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-[70vh] w-full flex flex-col justify-center items-center space-y-4">
      <div className="relative flex items-center justify-center">
        {/* Outer Animated Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="w-16 h-16 md:w-20 md:h-20 border-4 border-dotted border-sky-500 rounded-full"
        />

        {/* Inner Bouncing Circle */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute w-8 h-8 md:w-10 md:h-10 bg-sky-500 rounded-full shadow-lg shadow-sky-200"
        />
      </div>

      {/* Loading Text with Fade Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="text-sky-600 font-serif font-semibold tracking-widest text-sm md:text-base uppercase"
      >
        Fetching Pet Magic...
      </motion.div>
    </div>
  );
};

export default Loading;
