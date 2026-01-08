/* eslint-disable react/prop-types */
import { MdPets, MdPhotoSizeSelectLarge, MdLocationOn } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AllPetCart = ({ item }) => {
  const { _id, name, image, category, country, date, size } = item || {};

  return (
    <motion.div whileHover={{ y: -8 }} className="h-full flex flex-col">
      <div className="group relative mx-auto w-full max-w-[380px] flex-1 flex flex-col overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:border-sky-200">
        {/* Image Section - Fixed Height for Uniformity */}
        <div className="relative h-64 md:h-72 w-full overflow-hidden bg-slate-100">
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={image}
            alt={name}
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-sky-600 shadow-sm flex items-center gap-1">
            <MdPets size={14} /> {category}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Name & Title */}
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-bold text-slate-800 capitalize font-serif group-hover:text-sky-500 transition-colors">
              {name}
            </h2>
            <div className="w-12 h-1 bg-sky-400 mx-auto mt-2 rounded-full"></div>
          </div>

          {/* Info Grid - 2x2 layout */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-slate-600">
              <div className="p-2 bg-sky-50 rounded-lg text-sky-500">
                <MdLocationOn size={18} />
              </div>
              <span className="text-sm font-medium truncate">{country}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <div className="p-2 bg-purple-50 rounded-lg text-purple-500">
                <MdPhotoSizeSelectLarge size={18} />
              </div>
              <span className="text-sm font-medium">{size}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <div className="p-2 bg-orange-50 rounded-lg text-orange-500">
                <BsCalendarDate size={18} />
              </div>
              <span className="text-sm font-medium">{date}</span>
            </div>

            <div className="flex items-center gap-2 text-slate-600">
              <div className="p-2 bg-green-50 rounded-lg text-green-500">
                <MdPets size={18} />
              </div>
              <span className="text-sm font-medium capitalize">{category}</span>
            </div>
          </div>

          {/* Action Button - Stays at bottom */}
          <div className="mt-auto">
            <Link to={`/allPetsDetails/${_id}`}>
              <button className="w-full py-3 rounded-2xl bg-sky-500 text-white font-bold transition-all duration-300 hover:bg-slate-800 shadow-lg shadow-sky-100 flex items-center justify-center gap-2 group-hover:shadow-none">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AllPetCart;
