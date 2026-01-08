import { useLoaderData } from "react-router-dom";
import detailsBanner from "../../assets/images/category/cats/details.jpg";
import RidSiteOffer from "./RidSiteOffer";
import PetLisModal from "./PetLisModal";
import {
  FaPaw,
  FaCalendarAlt,
  FaGlobeAmericas,
  FaSyringe,
  FaPalette,
} from "react-icons/fa";

const PetLisDetails = () => {
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

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section - Responsive Height */}
      <div className="relative overflow-hidden">
        <img
          className="h-[300px] md:h-[450px] w-full object-cover rounded-b-3xl md:rounded-b-[50px]"
          src={detailsBanner}
          alt="Banner"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <h2 className="ml-6 md:ml-24 uppercase text-white text-3xl md:text-6xl font-bold leading-tight">
            Pet Listing <br /> <span className="text-sky-400">Details</span>
          </h2>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 my-12 md:my-24 gap-10 px-4 md:px-10">
        {/* Left Side: Pet Info (Span 3 columns on Desktop) */}
        <div className="lg:col-span-3 space-y-8">
          <div className="border-s-8 border-sky-400 ps-6">
            <h2 className="text-3xl md:text-5xl text-slate-800 capitalize font-bold font-serif">
              Meet <span className="text-sky-500">{name}</span>
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              {longDescription}
            </p>
          </div>

          <div className="group overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={image}
              alt={name}
              className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Information Card */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 capitalize mb-6 border-b pb-4">
              Full Information
            </h2>
            <p className="text-slate-600 mb-8 italic text-lg">
              "{shortDescription}"
            </p>

            {/* Responsive Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <FaPaw className="text-sky-400 text-2xl" />
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Category
                  </p>
                  <p className="font-semibold">{category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <FaCalendarAlt className="text-orange-400 text-2xl" />
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Age
                  </p>
                  <p className="font-semibold">{age}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <FaGlobeAmericas className="text-green-400 text-2xl" />
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Country
                  </p>
                  <p className="font-semibold">{country}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <FaSyringe className="text-rose-400 text-2xl" />
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Vaccination
                  </p>
                  <p className="font-semibold">{vaccinationStatus}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <FaPalette className="text-purple-400 text-2xl" />
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Color
                  </p>
                  <p className="font-semibold">{color}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                <FaCalendarAlt className="text-slate-400 text-2xl" />
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold">
                    Date Listed
                  </p>
                  <p className="font-semibold">{date}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <PetLisModal />
            </div>
          </div>
        </div>

        {/* Right Side: Offers (Span 2 columns on Desktop) */}
        <div className="lg:col-span-2">
          <div className="sticky top-24">
            <RidSiteOffer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetLisDetails;
