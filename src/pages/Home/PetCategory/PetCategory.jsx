import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CategoryCard from "./CategoryCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)


const PetCategory = () => {
    const axiosPublic = useAxiosPublic()
    const [categories, setCategories] = useState([])

    useEffect(() => {
        axiosPublic.get('/api/v1/pets-category')
            .then(res => {
                setCategories(res.data)
            })
    }, [axiosPublic])
    return (
        <div>
            <SectionTitle subHeading={'our pet care service'} Heading={'our popular pet category'} description={'Choose Your Pet: Decide which type of pet best fits your lifestyle, whether its a dog cat, bird, fish, reptile, or small mammal.'}></SectionTitle>
            {/* category data */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-10 md:px-3 lg:px-0">
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>


    );
};

<<<<<<< HEAD
export default PetCategory;
=======
export default PetCategory;
=======
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
        staggerChildren: 0.15, // Ekta card ashar 0.15s por arekta ashbe
        delayChildren: 0.2, // Section-e ashar 0.2s por shuru hobe
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50, // 50px nich theke shuru hobe
      scale: 0.9, // Halka choto thakbe
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1], // Custom cubic-bezier for "Smooth pop"
      },
    },
  };

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-16 md:py-24 overflow-hidden">
      <SectionTitle
        subHeading={"our pet care service"}
        Heading={"our popular pet category"}
        description={
          "Choose Your Pet: Decide which type of pet best fits your lifestyle, whether its a dog, cat, bird, fish, reptile, or small mammal."
        }
      />

      {loading ? (
        <div className="flex justify-center my-20">
          <span className="loading loading-dots loading-lg text-sky-500"></span>
        </div>
      ) : (
        /* AnimatePresence ba motion.div bebohar kore trigger kora */
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Scroll korle ei state-e jabe
          viewport={{ once: true, margin: "-100px" }} // Screen-er 100px bhetore dhukle trigger hobe
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
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
