<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
const Budget = () => {
    return (
        <div className="my-10">
            <h1 className="text-xl md:text-4xl font-serif  text-center mb-5">Why Trust Us with <br /> Your Pet&apos;s Care?</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center  px-5 md:px-3 lg:px-0 ">
                {/* ---1--- */}
                <div className="border p-4 hover:bg-gray-200 duration-500 transition shadow-xl">
                    <h1 className="text-5xl font-serif  ">3000</h1>
                    <div className="divider w-28 mx-auto divide-dotted divide-teal-400"></div>
                    <p className="text-xl text-gray-400 font-serif">Milions Dolars Saved</p>
                </div>
                {/* ---2--- */}
                <div className="border p-4 hover:bg-gray-200 duration-500 transition shadow-xl">
                    <h1 className="text-5xl font-serif  ">1368</h1>
                    <div className="divider w-28 mx-auto"></div>
                    <p className="text-xl text-gray-400 font-serif">Successful Deals</p>
                </div>
                {/* ---3--- */}
                <div className="border p-4 hover:bg-gray-200 duration-500 transition shadow-xl">
                    <h1 className="text-5xl font-serif  ">0700</h1>
                    <div className="divider w-28 mx-auto"></div>
                    <p className="text-xl text-gray-400 font-serif">Advisions & Experts</p>
                </div>
                {/* ---4--- */}
                <div className="border p-4 hover:bg-gray-200 duration-500 transition shadow-xl">
                    <h1 className="text-5xl font-serif">3228</h1>
                    <div className="divider w-28 mx-auto"></div>
                    <p className="text-xl text-gray-400 font-serif">Happy Customers</p>
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default Budget;
=======
export default Budget;
=======
import { motion } from "framer-motion";
import CountUp from "react-countup";

const Budget = () => {
  const stats = [
    { id: 1, number: 3000, label: "Million Dollars Saved", suffix: "+" },
    { id: 2, number: 1368, label: "Successful Deals", suffix: "" },
    { id: 3, number: 700, label: "Advisors & Experts", suffix: "+" },
    { id: 4, number: 3228, label: "Happy Customers", suffix: "" },
  ];

  return (
    <div className="py-16 md:py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 leading-tight">
            Why Trust Us with <br />
            <span className="text-sky-500">Your Pet&apos;s Care?</span>
          </h1>
          <div className="w-24 h-1.5 bg-sky-400 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-transparent hover:border-sky-300 transition-all duration-300 text-center group"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2 font-mono group-hover:text-sky-600 transition-colors">
                <CountUp
                  end={stat.number}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </h2>

              <div className="w-12 h-1 bg-sky-200 mx-auto my-4 group-hover:w-20 transition-all duration-500 rounded-full"></div>

              <p className="text-lg text-slate-500 font-serif leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budget;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
