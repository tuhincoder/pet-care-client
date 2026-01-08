import gallery from "../../assets/images/gallery/gallery.jpg";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import GalleryCart from "./GalleryCart";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../components/Loader/Loading";
import CoverImg from "../../components/common/CoverImg";

const Gallery = () => {
  const axiosPublic = useAxiosPublic();

  const { data: galleries = [], isLoading } = useQuery({
    queryKey: ["galleries"],
    queryFn: async () => {
      const res = await axiosPublic.get("/gallery");
      return res.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-10">
      <CoverImg image={gallery} text={"Pet Gallery"} />

      <div className="my-5 pl-5 md:pl-0">
        <h2 className="border-s-4 text-4xl font-serif border-sky-400 ps-2">
          Our Pet Gallery
        </h2>
        <h1 className="border-s-4 text-xl border-sky-300 ps-2">Gallery</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 md:px-0">
        {galleries.map((photo) => (
          <GalleryCart key={photo._id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
