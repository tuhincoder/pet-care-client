import galleryBanner from "../../assets/images/gallery/gallery.jpg";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GalleryCart from "./GalleryCart";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loader/Loading";
import CoverImg from "../../components/common/CoverImg";
import { motion } from "framer-motion";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();

  const { data: galleries = [], isLoading } = useQuery({
    queryKey: ["galleries"],
    queryFn: async () => {
      const res = await axiosPublic.get("/gallery");
      return res.data;
    },
  });

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Protiti chhobi 0.1s por por ashbe
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pb-20">
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CoverImg image={galleryBanner} text={"Pet Gallery"} />
      </motion.div>

      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="my-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="border-s-8 border-sky-400 ps-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 font-serif">
              Our Pet Gallery
            </h2>
            <p className="text-sky-500 font-medium tracking-[0.2em] uppercase mt-2">
              Moments of Happiness
            </p>
          </motion.div>
        </div>

        {/* Gallery Grid with Framer Motion */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {galleries.map((photo) => (
            <motion.div key={photo._id} variants={item}>
              <GalleryCart photo={photo} />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {galleries.length === 0 && (
          <div className="text-center py-20 text-slate-400">
            <p className="text-xl italic">
              No photos available in the gallery yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
