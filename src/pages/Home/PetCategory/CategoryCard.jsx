/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
const CategoryCard = ({ category }) => {
    const { name, image } = category || {};
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl mb-5  hover:shadow-2xl border-b-2 border-sky-300 cursor-pointer  group ">
                <figure><img className=" w-full h-[250px] object-cover group-hover:scale-110 transition duration-500" src={image} alt="Shoes" /></figure>
                <div className="card-body">

                    <div className="card-actions flex items-center justify-between">
                        <h2 className="card-title uppercase font-serif">{name}</h2>
                        <Link to={`/allPetsCategory/${name}`}>
                            <button className="text-xl btn  animate-pulse "><FaArrowRight className="text-sky-500" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default CategoryCard;
=======
export default CategoryCard;
=======
import { motion } from "framer-motion";

const CategoryCard = ({ category }) => {
  const { name, image } = category || {};

  return (
    <motion.div
      whileHover={{ y: -10 }} // Card-ti halka upor-e uthbe
      className="h-full"
    >
      <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-b-4 border-sky-400 cursor-pointer group rounded-2xl overflow-hidden">
        {/* Image Section with Zoom Effect */}
        <figure className="relative overflow-hidden h-[200px] md:h-[250px]">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
            src={image}
            alt={name}
          />
          {/* Image-er upore halka ekta overlay */}
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
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
