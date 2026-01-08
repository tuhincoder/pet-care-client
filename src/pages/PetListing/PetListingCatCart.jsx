/* eslint-disable react/prop-types */
import { CgNametag } from "react-icons/cg";
import {
  FaBirthdayCake,
  FaMapMarkerAlt,
  FaPaw,
  FaHistory,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PetListingCatCart = ({ pet }) => {
  const { name, image, age, date, country, category, _id } = pet || {};

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 group"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={image}
          alt={name}
        />
        {/* Floating Category Tag */}
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-sky-600 flex items-center gap-1 shadow-sm">
          <FaPaw /> {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <h1 className="text-2xl font-bold text-slate-800 capitalize mb-4 group-hover:text-sky-500 transition-colors">
          {name}
        </h1>

        <div className="space-y-4">
          {/* Row 1 */}
          <div className="flex justify-between items-center text-slate-600 border-b border-slate-50 pb-3">
            <p className="flex items-center text-sm font-medium">
              <CgNametag className="mr-2 text-sky-400 text-lg" /> {category}
            </p>
            <p className="flex items-center text-sm font-medium">
              <FaMapMarkerAlt className="mr-2 text-rose-400" /> {country}
            </p>
          </div>

          {/* Row 2 */}
          <div className="flex justify-between items-center text-slate-600">
            <p className="flex items-center text-sm font-medium">
              <FaHistory className="mr-2 text-orange-400" /> Age: {age}
            </p>
            <p className="flex items-center text-sm font-medium">
              <FaBirthdayCake className="mr-2 text-purple-400" /> {date}
            </p>
          </div>
        </div>

        {/* Details Button - Always at the bottom */}
        <div className="mt-auto pt-6">
          <Link to={`/petDetails/${_id}`}>
            <button className="w-full py-3.5 bg-slate-100 group-hover:bg-sky-500 group-hover:text-white text-slate-700 font-bold rounded-2xl transition-all duration-300 transform active:scale-95 shadow-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PetListingCatCart;
