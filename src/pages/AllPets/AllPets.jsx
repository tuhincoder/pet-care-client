import usePets from "../../hooks/usePets";
import allPetsImg from "../../assets/images/category/cats/details.jpg";
import { useParams } from "react-router-dom";
import AllPetCart from "./AllPetCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const AllPets = () => {
  const [pets] = usePets();
  const { category: petCategory } = useParams();

  // Filtering logic
  const allPetCategory = pets.filter((item) => item.category === petCategory);

  return (
    <div className="pb-20">
      {/* --- Hero Banner Section --- */}
      <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-b-[40px] md:rounded-b-[80px] shadow-lg">
        <img
          className="h-full w-full object-cover"
          src={allPetsImg}
          alt="All Pets Banner"
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 md:px-20"
          >
            <h2 className="text-white text-4xl md:text-7xl font-bold uppercase font-serif tracking-tight">
              All <span className="text-sky-400">{petCategory || "Pets"}</span>
            </h2>
            <p className="text-gray-200 mt-2 text-sm md:text-xl max-w-md font-light">
              Find your perfect companion from our curated list of lovable{" "}
              {petCategory || "animals"}.
            </p>
          </motion.div>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="container mx-auto px-4 md:px-8 mt-16 md:mt-24">
        <SectionTitle
          subHeading="Your Favourite Pets"
          Heading={`Discover Our ${petCategory || "Pet"} List`}
          description="Browse through our available pets and find the one that touches your heart."
        />

        {/* --- Grid Layout --- */}
        {allPetCategory.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12">
            {allPetCategory.map((item) => (
              <AllPetCart key={item._id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-slate-50 rounded-3xl mt-10">
            <h3 className="text-2xl text-slate-400 font-serif">
              No pets found in this category.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPets;
