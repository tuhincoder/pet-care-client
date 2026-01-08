/* eslint-disable react/prop-types */
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const PetFoodCart = ({ food }) => {
    const { name, image, price, _id } = food || {};


    const handleWishList = () => {
        toast('WishList added successfully thanks.')
    }


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl  hover:border border-sky-400">
                <figure className="px-10 pt-10 ">
                    <img src={image} alt="Shoes" className="rounded-xl bg-stone-200 p-4 h-[250px]" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title capitalize  ">{name}</h2>
                    <p>Price: ${price}</p>
                    <div className="w-full flex italic justify-between">
                        <Link to={`/petFood/${_id}`}>
                            <div className="border px-2 py-2 rounded-lg bg-gray-100 text-lg font-mono hover:bg-sky-300 hover:text-white duration-700 ">Details</div>
                        </Link>
                        <div onClick={handleWishList} className="border px-2 italic py-2 rounded-lg bg-gray-100 text-lg font-mono hover:bg-sky-300 duration-700 hover:text-white cursor-pointer">WishList</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default PetFoodCart;
=======
export default PetFoodCart;
=======
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart, FaEye, FaShoppingBasket } from "react-icons/fa";

const PetFoodCart = ({ food }) => {
  const { name, image, price, _id } = food || {};

  const handleWishList = () => {
    toast.success(`'${name}' added to favorites!`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="h-full flex flex-col" // Full height ensure korbe
    >
      <div className="card bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-sky-300 rounded-2xl overflow-hidden flex-1 flex flex-col">
        {/* Image Section - Fixed Height for Uniformity */}
        <figure className="relative h-[220px] md:h-[240px] bg-slate-50 overflow-hidden group">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Floating Price Badge */}
          <div className="absolute top-4 left-4 bg-sky-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
            <span>$</span>
            {price}
          </div>

          {/* Quick Action Overlay (Desktop Only) */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button
              onClick={handleWishList}
              className="btn btn-circle btn-sm bg-white border-none text-rose-500 hover:bg-rose-500 hover:text-white"
            >
              <FaHeart />
            </button>
          </div>
        </figure>

        {/* Content Section - Flex-grow makes cards equal height */}
        <div className="card-body p-5 flex flex-col flex-grow text-center">
          <div className="flex-grow">
            <h2 className="text-xl font-bold text-slate-800 font-serif line-clamp-1 mb-1 group-hover:text-sky-600 transition-colors">
              {name}
            </h2>
            <p className="text-slate-500 text-xs font-medium tracking-wide uppercase mb-4 flex items-center justify-center gap-1">
              <FaShoppingBasket className="text-sky-400" /> Premium Nutrients
            </p>
          </div>

          {/* Action Buttons - Always aligned at bottom */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <Link to={`/petFood/${_id}`} className="w-full">
              <button className="w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-sky-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 border-none">
                <FaEye /> Details
              </button>
            </Link>

            <button
              onClick={handleWishList}
              className="w-full py-2.5 rounded-xl bg-sky-50 text-sky-600 font-bold text-sm hover:bg-sky-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 border-none"
            >
              <FaHeart className="hidden sm:inline" /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PetFoodCart;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
