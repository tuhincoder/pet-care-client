/* eslint-disable react/prop-types */
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
import logo from '../../assets/images/logo/logo2.png'
const SectionTitle = ({ subHeading, Heading, description }) => {
    return (
        <div className=' w-1/2 mx-auto text-center my-10 space-y-2'>
            <img className='w-[60px] mx-auto' src={logo} alt="" />
            <h4 className=" md:text-2xl font-mono text-sky-600">{subHeading}</h4>
            <h2 className="text-xl md:text-4xl font-serif capitalize text-gray-600 font-semibold">{Heading}</h2>
            <p className="text-slate-500 hidden md:block">{description}</p>
        </div>
    );
};

<<<<<<< HEAD
export default SectionTitle;
=======
export default SectionTitle;
=======
import { motion } from "framer-motion";
import logo from "../../assets/images/logo/logo2.png";

const SectionTitle = ({ subHeading, Heading, description }) => {
  return (
    <div className="w-full px-4 md:w-3/4 lg:w-1/2 mx-auto text-center my-12 space-y-3">
      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img className="w-12 md:w-16 mx-auto" src={logo} alt="PetCare Logo" />
      </motion.div>

      {/* SubHeading */}
      <motion.h4
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm md:text-xl font-mono text-sky-500 font-semibold tracking-widest uppercase"
      >
        {subHeading}
      </motion.h4>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl lg:text-5xl font-serif capitalize text-slate-800 font-bold leading-tight"
      >
        {Heading}
      </motion.h2>

      {/* Description - Mobile-e o dekhabe kintu choto hoye */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
        className="hidden md:block text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed"
      >
        {description}
      </motion.p>

      {/* Decorative Divider Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ delay: 0.8, duration: 1 }}
        viewport={{ once: true }}
        className="h-1 bg-sky-400 mx-auto rounded-full mt-4"
      />
    </div>
  );
};

export default SectionTitle;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
