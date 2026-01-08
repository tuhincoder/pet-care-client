/* eslint-disable react/prop-types */

const GalleryCart = ({ photo }) => {
  return (
    <div className="border drop-shadow-xl">
      <img
        className="h-[420px] hover:scale-110 duration-700 w-full p-5 object-cover rounded-md"
        src={photo.image}
        alt=""
      />
    </div>
  );
};

export default GalleryCart;
