import { MdPlusOne } from "react-icons/md";
import offer from "../../../assets/images/home/banner3.jpg";
import { IoStarSharp } from "react-icons/io5";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <div className="overflow-hidden pt-16 bg-base-100">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          {/* LEFT SIDE: IMAGE WITH ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative group">
              {/* Decorative Background */}
              <div className="absolute -inset-4 bg-sky-100 rounded-xl scale-95 group-hover:scale-100 transition duration-500 -z-10"></div>

              <img
                src={offer}
                className="w-full rounded-2xl shadow-2xl object-cover h-[300px] md:h-[500px]"
                alt="Pet Care Offer"
              />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg hidden md:block">
                <p className="text-sky-600 font-bold text-xl">10+ Years</p>
                <p className="text-xs text-slate-500 uppercase tracking-tighter">
                  Experience
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT WITH ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 space-y-3"
          >
            <div className="inline-block">
              <MdPlusOne className="text-6xl text-sky-500 bg-sky-50 p-2 rounded-lg border-b-4 border-sky-500" />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold font-serif text-slate-800 leading-tight">
              We Are Providing <span className="text-sky-500">Pet Care</span>{" "}
              Service For Years.
            </h1>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              Pellentesque maximus augue orci, quis congue purus iaculisona
              ideno joku. Maecenas eu lorem quisesdoi massal molestie jugnute
              vulputate in sitagajoi amet diam. Cras eu odio sit amet.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-100">
              <h3 className="italic text-slate-600 font-medium max-w-[200px]">
                We think working process may{" "}
                <span className="text-sky-500">increase</span> mindset.
              </h3>

              <div className="flex flex-col items-center bg-white border border-sky-200 px-6 py-3 rounded-full shadow-sm">
                <p className="text-xs font-semibold text-slate-400">
                  Based on{" "}
                  <span className="underline text-sky-600">20,921 reviews</span>
                </p>
                <div className="flex items-center gap-2">
                  <IoStarSharp className="text-yellow-400" />
                  <span className="font-bold text-slate-700">Trustpilot</span>
                </div>
              </div>
            </div>

            <p className="text-slate-600 font-medium italic border-l-4 border-sky-400 ps-4">
              "Our mission is to provide a loving home for every pet and a
              perfect companion for every human."
            </p>

            <div className="pt-2 hidden md:block">
              <h2 className="text-2xl font-bold text-slate-800 font-serif">
                MH Tuhin
              </h2>
              <p className="text-sky-500 font-semibold tracking-wide uppercase text-sm">
                Founder, Pet Care Adoption
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
