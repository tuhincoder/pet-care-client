import { motion } from "framer-motion";

const Choice = () => {
  const plans = [
    {
      id: 1,
      price: "$8",
      level: "Basic",
      gradient: "from-[#96C9F4] via-[#48CFCB] to-[#4FB5FF]",
    },
    {
      id: 2,
      price: "$15",
      level: "Silver",
      gradient: "from-[#96C9F4] via-[#4FB5FF] to-[#4FB5FF]",
    },
    {
      id: 3,
      price: "$28",
      level: "Gold",
      gradient: "from-[#48CFCB] via-[#4FB5FF] to-[#0064c2]",
    },
    {
      id: 4,
      price: "$35",
      level: "Platinum",
      gradient: "from-[#0064c2] via-[#4FB5FF] to-[#48CFCB]",
    },
  ];

  return (
    <div className="mt-10 max-w-screen-xl mx-auto px-4 md:px-8">
      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold font-serif text-center mb-10 text-slate-800"
      >
        Your Budget, Your Choice
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`group relative h-[200px] overflow-hidden bg-gradient-to-r ${plan.gradient} px-6 py-6 text-white rounded-2xl shadow-lg cursor-pointer flex items-center justify-center transition-all duration-500`}
          >
            {/* Animated Background Circles */}
            <span className="absolute right-[-30%] top-[-30%] z-10 h-[180px] w-[180px] rounded-full bg-white/20 blur-2xl duration-500 group-hover:top-[20%] group-hover:right-[20%] group-hover:scale-150"></span>
            <span className="absolute left-[-20%] bottom-[-20%] z-10 h-[120px] w-[120px] rounded-full bg-black/10 blur-xl duration-500 group-hover:bottom-[10%] group-hover:left-[10%]"></span>

            {/* Content */}
            <div className="text-center relative z-20 transform group-hover:scale-110 transition-transform duration-300">
              <h2 className="text-5xl md:text-6xl font-serif font-black mb-1 drop-shadow-md">
                {plan.price}
              </h2>
              <p className="text-xl md:text-2xl font-medium tracking-widest uppercase opacity-90">
                {plan.level}
              </p>
            </div>

            {/* Hover Border */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-2xl transition-all duration-300"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Choice;
