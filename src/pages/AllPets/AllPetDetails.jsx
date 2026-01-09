import { Link, useLoaderData, useNavigate } from "react-router-dom";
import detailsBanner from "../../assets/images/category/cats/details.jpg";
import RidSiteOffer from "../PetListing/RidSiteOffer";
import PetLisModal from "../PetListing/PetLisModal";
import { motion } from "framer-motion";
import {
  FaPaw,
  FaRegCalendarAlt,
  FaMapMarkerAlt,
  FaSyringe,
  FaPalette,
} from "react-icons/fa";

const AllPetDetails = () => {
  const petDetails = useLoaderData();
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
  } = petDetails || {};
  const navigate = useNavigate();
  const handleBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- Hero Banner Section --- */}
      <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden shadow-lg">
        <img
          className="h-full w-full object-cover"
          src={detailsBanner}
          alt="Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
          <div className="container mx-auto px-6 md:px-24 pb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-3xl md:text-6xl font-bold font-serif uppercase tracking-wide"
            >
              Meet {name}
            </motion.h2>
            <p className="text-sky-300 mt-4 font-medium tracking-widest uppercase text-sm md:text-lg">
              <Link onClick={handleBack}>Back</Link> /{" "}
              <Link to={"/"}>Home</Link> / {category}
            </p>
          </div>
        </div>
      </div>

      {/* --- Details Content --- */}
      <div className="container mx-auto px-4 md:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT SIDE: Information */}
          <div className="lg:col-span-3 space-y-10">
            {/* Title Section */}
            <div className="border-l-8 border-sky-400 pl-6">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-800 font-serif">
                Full Information of <span className="text-sky-500">{name}</span>
              </h2>
              <p className="mt-4 text-slate-500 text-lg leading-relaxed">
                {shortDescription}
              </p>
            </div>

            {/* Pet Featured Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </motion.div>

            {/* Info Cards Grid */}
            <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 shadow-inner border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-8 border-b pb-4">
                Quick Characteristics
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <InfoItem
                  icon={<FaPaw />}
                  label="Category"
                  value={category}
                  color="sky"
                />
                <InfoItem
                  icon={<FaRegCalendarAlt />}
                  label="Age"
                  value={age}
                  color="orange"
                />
                <InfoItem
                  icon={<FaMapMarkerAlt />}
                  label="Origin"
                  value={country}
                  color="rose"
                />
                <InfoItem
                  icon={<FaSyringe />}
                  label="Vaccination"
                  value={vaccinationStatus}
                  color="green"
                />
                <InfoItem
                  icon={<FaPalette />}
                  label="Color"
                  value={color}
                  color="purple"
                />
                <InfoItem
                  icon={<FaRegCalendarAlt />}
                  label="Listed On"
                  value={date}
                  color="indigo"
                />
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-slate-700 italic">
                  About {name}
                </h4>
                <p className="text-slate-600 leading-relaxed text-lg italic">
                  "{longDescription}"
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-center mt-12">
                <PetLisModal />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Sidebar Offers */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <RidSiteOffer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* Reusable Info Component */
const InfoItem = ({ icon, label, value, color }) => {
  const colors = {
    sky: "bg-sky-100 text-sky-600",
    orange: "bg-orange-100 text-orange-600",
    rose: "bg-rose-100 text-rose-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    indigo: "bg-indigo-100 text-indigo-600",
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className={`p-3 rounded-xl text-xl ${colors[color]}`}>{icon}</div>
      <div>
        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">
          {label}
        </p>
        <p className="text-slate-800 font-semibold text-lg">{value}</p>
      </div>
    </div>
  );
};

export default AllPetDetails;
