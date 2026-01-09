import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import CoverText from "../../../components/common/CoverText";

const PetAdded = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const imgbb_hosting_api_key = import.meta.env.VITE_IMAGE_API_KEY;
  const image_upload_api = `https://api.imgbb.com/1/upload?key=${imgbb_hosting_api_key}`;

  const onSubmit = async (data) => {
    // Show a simple loading toast
    Swal.fire({
      title: "Please wait...",
      text: "Adding your pet to our list",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_upload_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });

    if (res.data.success) {
      const petItem = {
        name: data.name,
        email: user?.email,
        image: res.data.data.display_url,
        age: data.age,
        location: data.location,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        date: data.date,
        submitDate: new Date(),
        category: data.category,
      };

      const petRes = await axiosSecure.post("/api/v1/pedAdded-create", petItem);

      if (petRes.data.insertedId) {
        reset();
        Swal.fire({
          icon: "success",
          title: "Added Successfully!",
          text: `${data.name} has been listed for adoption.`,
          timer: 2000,
        });
      }
    }
  };

  // Label styling for consistency
  const labelStyle = "block mb-2 text-sm font-bold text-gray-700";
  // Simple & clean input styling
  const inputStyle =
    "w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-400 focus:border-sky-400 outline-none transition-all";

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-0">
      <CoverText
        heading={"Add A New Pet"}
        subHeading={"Fill out the form below to list a pet for adoption"}
      />

      <div className="mt-8 bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pet Name */}
            <div className="form-control w-full">
              <label className={labelStyle}>Pet Name</label>
              <input
                type="text"
                {...register("name", { required: "Pet name is required" })}
                placeholder="Enter pet name"
                className={inputStyle}
              />
              {errors.name && (
                <span className="text-red-500 text-xs mt-1 font-medium">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Pet Category */}
            <div className="form-control w-full">
              <label className={labelStyle}>Category</label>
              <select
                defaultValue="default"
                {...register("category", {
                  required: "Please select a category",
                })}
                className={inputStyle}
              >
                <option disabled value="default">
                  Choose a category
                </option>
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="pigeon">Pigeon</option>
                <option value="rabbit">Rabbit</option>
              </select>
              {errors.category && (
                <span className="text-red-500 text-xs mt-1 font-medium">
                  {errors.category.message}
                </span>
              )}
            </div>

            {/* Pet Image */}
            <div className="form-control w-full">
              <label className={labelStyle}>Pet Image</label>
              <input
                type="file"
                {...register("image", { required: "Image is required" })}
                className="w-full p-2 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
              />
              {errors.image && (
                <span className="text-red-500 text-xs mt-1 font-medium">
                  {errors.image.message}
                </span>
              )}
            </div>

            {/* Pet Age */}
            <div className="form-control w-full">
              <label className={labelStyle}>Pet Age (Years)</label>
              <input
                type="number"
                {...register("age", { required: "Age is required" })}
                placeholder="How old is the pet?"
                className={inputStyle}
              />
              {errors.age && (
                <span className="text-red-500 text-xs mt-1 font-medium">
                  {errors.age.message}
                </span>
              )}
            </div>

            {/* Location */}
            <div className="form-control w-full">
              <label className={labelStyle}>Location</label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                placeholder="e.g. Dhaka, Bangladesh"
                className={inputStyle}
              />
              {errors.location && (
                <span className="text-red-500 text-xs mt-1 font-medium">
                  {errors.location.message}
                </span>
              )}
            </div>

            {/* Date Added */}
            <div className="form-control w-full">
              <label className={labelStyle}>Available From</label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className={inputStyle}
              />
              {errors.date && (
                <span className="text-red-500 text-xs mt-1 font-medium">
                  {errors.date.message}
                </span>
              )}
            </div>
          </div>

          {/* Short Description */}
          <div className="form-control w-full mt-6">
            <label className={labelStyle}>Short Description</label>
            <input
              type="text"
              {...register("shortDescription", {
                required: "Short description is required",
              })}
              placeholder="A quick summary (e.g. Friendly and playful cat)"
              className={inputStyle}
            />
            {errors.shortDescription && (
              <span className="text-red-500 text-xs mt-1 font-medium">
                {errors.shortDescription.message}
              </span>
            )}
          </div>

          {/* Long Description */}
          <div className="form-control w-full mt-6">
            <label className={labelStyle}>Full Details</label>
            <textarea
              rows="4"
              {...register("longDescription", {
                required: "Full details are required",
              })}
              className={`${inputStyle} resize-none`}
              placeholder="Tell us more about the pet's personality, health, and history..."
            ></textarea>
            {errors.longDescription && (
              <span className="text-red-500 text-xs mt-1 font-medium">
                {errors.longDescription.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-lg transition-all active:scale-95 shadow-md uppercase tracking-wide"
            >
              Add Pet To List
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PetAdded;
