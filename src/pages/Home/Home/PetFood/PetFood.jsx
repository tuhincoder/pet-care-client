import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import PetFoodCart from "./PetFoodCart";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const PetFood = () => {
  const axiosPublic = useAxiosPublic();
  const [petFoods, setPetFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosPublic
      .get("/api/v1/petFood-read")
      .then((res) => {
        setPetFoods(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosPublic]);

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // প্রতিটি food card 0.1s gap-এ আসবে
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-5 ">
      {/* Section Title */}
      <SectionTitle
        subHeading={"Limited Offer"}
        Heading={"Best food for your loving Pet"}
        description={
          "Give your pets the nutrition they deserve with our premium selection of healthy and delicious pet foods."
        }
      />

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center my-20">
          <span className="loading loading-spinner loading-lg text-sky-500"></span>
        </div>
      ) : (
        <>
          {/* Responsive Grid with Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {petFoods.map((item) => (
              <motion.div key={item._id} variants={itemVariants}>
                <PetFoodCart food={item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Empty State */}
          {petFoods.length === 0 && (
            <p className="text-center text-gray-400 mt-10">
              No food items available right now.
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default PetFood;
