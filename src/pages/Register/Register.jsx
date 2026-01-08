import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/images/login/register.jpg";
import GithubLogin from "../../components/SocialLogin/GithubLogin";
import GoogleLogin from "../../components/SocialLogin/GoogleLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, userProfileUpdate } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const image_hosting_api_key = import.meta.env.VITE_IMAGE_API_KEY;
  const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`;

  const onSubmit = async (data) => {
    const toastId = toast.loading("Creating user...");
    const imageFile = { image: data.image[0] };

    try {
      const res = await axiosPublic.post(image_upload_api, imageFile, {
        headers: { "content-type": "multipart/form-data" },
      });

      if (res.data.success) {
        const userResult = await createUser(data.email, data.password);
        await userProfileUpdate(data.name, res.data.data.display_url);

        const userInfo = {
          photo: userResult.user.photoURL,
          name: data.name,
          email: data.email,
        };

        const saveRes = await axiosPublic.post("/user", userInfo);
        if (saveRes.data.insertedId) {
          reset();
          toast.success("User created successfully!", { id: toastId });
          navigate("/");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message, { id: toastId });
    }
  };

  return (
    <div className="flex lg:flex-row-reverse min-h-screen bg-white drop-shadow-lg">
      {/* Left Image */}
      <div className="flex-1 hidden md:block border">
        <img src={registerImg} alt="Register" className="w-full h-4/5" />
      </div>

      {/* Right Form */}
      <div className="flex-1 w-full lg:w-[500px] mx-auto px-5 py-3 shadow-lg">
        <h1 className="text-3xl text-center font-serif mb-5">
          Register To Pet Care
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mb-3">
            <label className="block mb-2">
              <span className="label-text text-lg font-serif">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="User name"
              className="p-3 w-full border block pl-10 drop-shadow-lg outline-none"
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </div>

          {/* Photo */}
          <div className="mb-3">
            <label className="block mb-2">
              <span className="label-text text-lg font-serif">PhotoURL</span>
            </label>
            <input
              {...register("image", { required: true })}
              type="file"
              className="p-3 w-full border block pl-10 drop-shadow-lg outline-none"
            />
            {errors.image && (
              <span className="text-red-500">Image is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block mb-2">
              <span className="label-text text-lg font-serif">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Your email"
              className="p-3 w-full border block pl-10 drop-shadow-lg outline-none"
            />
            {errors.email && (
              <span className="text-red-500">Email is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-3 mt-5">
            <label className="block mb-2">
              <span className="label-text text-lg font-serif">Password</span>
            </label>
            <div className="relative">
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 10,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Your Password"
                className="p-3 w-full pl-10 drop-shadow-lg block outline-none border"
              />
              <span
                className="absolute right-4 top-5 text-xl cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Password Validation */}
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be at least 6 characters long
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-500">
                Password must have one uppercase, one lowercase, one number, and
                one special character
              </p>
            )}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Submit */}
          <div className="mb-3">
            <input
              type="submit"
              value="Register"
              className="px-6 py-3 w-full text-xl bg-gray-200 hover:bg-sky-300 rounded-lg font-serif drop-shadow-xl duration-500 cursor-pointer"
            />
          </div>
        </form>

        {/* Social Login */}
        <div className="divider">Login with social account</div>
        <div className="flex justify-around">
          <GoogleLogin />
          <GithubLogin />
        </div>

        <p className="text-center mt-5 text-lg font-serif shadow-inner">
          Already have an account?{" "}
          <Link
            to="/login"
            className="underline underline-offset-4 decoration-1 p-1 text-blue-500 text-lg"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
