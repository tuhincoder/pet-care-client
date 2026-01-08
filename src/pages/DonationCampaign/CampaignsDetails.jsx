import { useLoaderData } from "react-router-dom";
import detailsImg from "../../assets/images/category/pigeon/pigeon1.jpg";
import PetLisModal from "../PetListing/PetLisModal";
import RidSiteOffer from "../PetListing/RidSiteOffer";
import CoverImg from "../../components/common/CoverImg";
import { motion } from "framer-motion"; // Framer Motion Import
import { FaInfoCircle, FaPaw, FaSyringe, FaGlobe } from "react-icons/fa";

const CampaignsDetails = () => {
  const campaignDetails = useLoaderData();
  const {
    name,
    image,
    longDescription,
    shortDescription,
    age,
    date,
    country,
    category,
    color,
    vaccinationStatus,
  } = campaignDetails || {};

  return (
    <div className="bg-white min-h-screen">
      {/* Cover Section with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CoverImg image={detailsImg} text={"Donation Campaign Details"} />
      </motion.div>

      {/* Main Content Grid */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 my-12 md:my-24 gap-10 px-4 md:px-10">
        {/* Left Side: Campaign Info */}
        <div className="lg:col-span-3 space-y-10">
          {/* Heading Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="border-s-8 border-s-sky-400 ps-6"
          >
            <h2 className="text-3xl md:text-5xl text-slate-800 capitalize font-bold font-serif mb-4">
              Campaign For <span className="text-sky-500">{name}</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              {shortDescription}
            </p>
          </motion.div>

          {/* Main Image with Hover Effect */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={image}
              alt={name}
              className="w-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Info Card Body */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-100"
          >
            <div className="flex items-center gap-3 mb-6 text-sky-500">
              <FaInfoCircle className="text-2xl" />
              <h3 className="text-2xl font-bold text-slate-800">
                Full Information
              </h3>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              {longDescription}
            </p>

            <div className="divider opacity-50"></div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                  Category
                </span>
                <span className="text-slate-700 font-semibold flex items-center gap-2">
                  <FaPaw className="text-sky-400" /> {category}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                  Age
                </span>
                <span className="text-slate-700 font-semibold">
                  {age} Years
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                  Country
                </span>
                <span className="text-slate-700 font-semibold flex items-center gap-2">
                  <FaGlobe className="text-green-400" /> {country}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                  Vaccination
                </span>
                <span className="text-slate-700 font-semibold flex items-center gap-2">
                  <FaSyringe className="text-rose-400" /> {vaccinationStatus}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                  Color
                </span>
                <span className="text-slate-700 font-semibold">{color}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400 text-xs uppercase font-bold tracking-wider">
                  Posted Date
                </span>
                <span className="text-slate-700 font-semibold">{date}</span>
              </div>
            </div>

            {/* Modal Trigger */}
            <div className="flex justify-center border-t pt-8">
              <PetLisModal />
            </div>
          </motion.div>
        </div>

        {/* Right Side Sticky Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="sticky top-24">
            <RidSiteOffer />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CampaignsDetails;
