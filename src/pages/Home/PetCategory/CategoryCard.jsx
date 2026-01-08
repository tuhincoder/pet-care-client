/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategoryCard = ({ category }) => {
  const { name, image } = category || {};

  return (
    <motion.div whileHover={{ y: -10 }} className="h-full">
      <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-sky-400 cursor-pointer group rounded-2xl overflow-hidden">
        {/* Image Section with Zoom */}
        <figure className="relative overflow-hidden h-[200px] md:h-[250px]">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            src={image}
            alt={name}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
        </figure>

        {/* Content Section */}
        <div className="card-body p-5 md:p-6 bg-white">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-slate-800 uppercase tracking-tight">
                {name}
              </h2>
              <p className="text-xs text-sky-500 font-medium tracking-widest mt-1">
                VIEW COLLECTION
              </p>
            </div>

            <Link to={`/allPetsCategory/${name}`}>
              <button className="btn btn-circle bg-sky-50 hover:bg-sky-500 text-sky-500 hover:text-white border-none shadow-md group/btn transition-all duration-300">
                <FaArrowRight className="text-lg group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
