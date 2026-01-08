import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { motion } from "framer-motion";

const PetCategory = () => {
  const axiosPublic = useAxiosPublic();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic
      .get("/api/v1/pets-category")
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [axiosPublic]);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4  overflow-hidden">
      <SectionTitle
        subHeading={"our pet care service"}
        Heading={"our popular pet category"}
        description={
          "Choose Your Pet: Decide which type of pet best fits your lifestyle, whether it's a dog, cat, bird, fish, reptile, or small mammal."
        }
      />

      {loading ? (
        <div className="flex justify-center my-20">
          <span className="loading loading-dots loading-lg text-sky-500"></span>
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10"
        >
          {categories.map((category) => (
            <motion.div key={category._id} variants={cardVariants}>
              <CategoryCard category={category} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {!loading && categories.length === 0 && (
        <p className="text-center text-gray-500 mt-10 italic">
          No categories found at the moment.
        </p>
      )}
    </section>
  );
};

export default PetCategory;
