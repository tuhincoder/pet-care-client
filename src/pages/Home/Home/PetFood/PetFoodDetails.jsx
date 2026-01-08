import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import detailsImg from "../../../../assets/images/category/rabbit/rabbit4.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Rating } from "@smastrom/react-rating";
import { useState } from "react"; // useState ekhane use kora hoyeche
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCart from "../../../../hooks/useCart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  FaShoppingCart,
  FaTruck,
  FaClock,
  FaShieldAlt,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const PetFoodDetails = () => {
  const [count, setCount] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);

  const navigate = useNavigate();
  const details = useLoaderData();
  const { user } = useAuth();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const {
    _id,
    name,
    image,
    price,
    rating,
    sku,
    longDescription,
    shortDescription,
    notPrice,
    photos,
  } = details || {};

  const handleAdToCart = () => {
    if (user && user.email) {
      const cartItem = {
        foodId: _id,
        email: user.email,
        name,
        image,
        price,
        quantity: count,
      };
      axiosSecure.post("/api/v1/carts", cartItem).then((res) => {
        if (res.data.insertedId) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to cart!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please Login",
        text: "Login required to add items to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-white pb-20">
      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[400px] w-full mb-10 overflow-hidden rounded-b-[50px] shadow-lg">
        <img
          className="h-full w-full object-cover"
          src={detailsImg}
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h2 className="text-white text-3xl md:text-6xl font-bold uppercase tracking-widest font-serif text-center px-4">
            Product Details
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-12 bg-white p-4 md:p-8 rounded-3xl shadow-sm border border-slate-100">
          {/* Left Side: Product Carousel */}
          <div className="lg:flex-1 w-full overflow-hidden">
            <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-inner">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showStatus={false}
                thumbWidth={80}
              >
                {photos?.map((img, index) => (
                  <div key={index} className="h-[300px] md:h-[500px]">
                    <img
                      className="h-full w-full object-contain"
                      src={img.photo}
                      alt={name}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="lg:flex-1 space-y-6">
            <div className="space-y-2">
              <span className="text-sky-500 font-bold tracking-widest text-sm uppercase">
                Pet Food Store
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-slate-800">
                {name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                <span className="text-slate-400 text-sm">
                  ({rating} Reviews)
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  In Stock
                </span>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl md:text-5xl font-bold text-rose-500">
                  ${price}
                </span>
                {notPrice && (
                  <span className="text-2xl text-slate-400 line-through">
                    ${notPrice}
                  </span>
                )}
              </div>
              <p className="text-slate-400 text-sm mt-2 font-medium">
                SKU: <span className="text-slate-600 font-mono">{sku}</span>
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed italic border-l-4 border-sky-400 pl-4 bg-sky-50/30 py-2">
              {shortDescription || longDescription?.slice(0, 150)}...
            </p>

            {/* Feature Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-slate-700">
              <div className="flex items-center gap-2 bg-sky-50 p-3 rounded-xl">
                <FaTruck className="text-sky-500" /> Delivery: 5-10 Days
              </div>
              <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-xl">
                <FaClock className="text-orange-500" /> Expired: 10 Months
              </div>
              <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl">
                <FaShieldAlt className="text-green-500" /> 100% Healthy Food
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
              <div className="flex items-center border-2 border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button
                  onClick={() => setCount(Math.max(1, count - 1))}
                  className="px-5 py-4 hover:bg-slate-100 transition-colors text-slate-600"
                >
                  <FaMinus />
                </button>
                <span className="px-8 font-bold text-xl text-slate-800 min-w-[60px] text-center">
                  {count}
                </span>
                <button
                  onClick={() => setCount(count + 1)}
                  className="px-5 py-4 hover:bg-slate-100 transition-colors text-slate-600"
                >
                  <FaPlus />
                </button>
              </div>
              <button
                onClick={handleAdToCart}
                className="w-full sm:flex-1 bg-sky-500 hover:bg-slate-800 text-white font-bold py-4 rounded-2xl shadow-lg shadow-sky-100 transition-all duration-300 flex items-center justify-center gap-3 text-lg"
              >
                <FaShoppingCart /> ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className="custom-tabs border-none"
          >
            <TabList className="flex flex-wrap gap-4 md:gap-8 border-b border-slate-200 mb-8">
              {["Description", "Nutritional Info", "Reviews"].map(
                (label, i) => (
                  <Tab
                    key={i}
                    className={`pb-4 cursor-pointer font-bold text-base md:text-lg outline-none transition-all ${
                      tabIndex === i
                        ? "text-sky-500 border-b-4 border-sky-500"
                        : "text-slate-400 border-b-4 border-transparent hover:text-slate-600"
                    }`}
                  >
                    {label}
                  </Tab>
                )
              )}
            </TabList>

            <div className="p-6 md:p-10 bg-slate-50 rounded-3xl border border-slate-100 leading-relaxed text-slate-600 shadow-sm">
              <TabPanel>
                <div className="space-y-4 animate-in fade-in duration-500">
                  <h3 className="text-xl font-bold text-slate-800">
                    Product Overview
                  </h3>
                  <p>{longDescription}</p>
                  <p>
                    Our specifically formulated food ensures your pet gets the
                    balanced diet they deserve, packed with essential minerals
                    and proteins.
                  </p>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="space-y-4 animate-in fade-in duration-500">
                  <h4 className="text-xl font-bold text-slate-800">
                    Why Choose This Food?
                  </h4>
                  <p>
                    We use evidence-based nutrition to sort through the noise of
                    marketing trends. Our focus is on balanced nutrition and
                    quality ingredients.
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-5 list-disc font-medium text-slate-700">
                    <li>High Protein Content</li>
                    <li>No Artificial Preservatives</li>
                    <li>Veterinarian Recommended</li>
                    <li>Omega-3 Fatty Acids</li>
                  </ul>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="flex flex-col items-center py-10 animate-in fade-in duration-500">
                  <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                  <p className="mt-4 text-2xl font-bold text-slate-800">
                    Customer Rating: {rating}/5
                  </p>
                  <p className="text-slate-400 mt-1">
                    Based on 2 verified purchases
                  </p>
                  <button className="mt-6 text-sky-500 font-bold border border-sky-500 px-6 py-2 rounded-xl hover:bg-sky-500 hover:text-white transition-all">
                    Write a Review
                  </button>
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PetFoodDetails;
