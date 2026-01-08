<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)

import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/images/login/register.jpg'
import GithubLogin from '../../components/SocialLogin/GithubLogin';
import GoogleLogin from '../../components/SocialLogin/GoogleLogin';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, userProfileUpdate } = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const image_hosting_api_key = import.meta.env.VITE_IMAGE_API_KEY;
    const image_upload_api = `https://api.imgbb.com/1/upload?key=${image_hosting_api_key}`

    const onSubmit = async (data) => {
        console.log(data)
        const toastId = toast.loading('creating user')
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_upload_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data',
            }
        })
        console.log('user image hosting imgbb', res.data);
        if (res.data.success) {
            createUser(data.email, data.password)
                .then(result => {
                    console.log('user create', result.user);
                    userProfileUpdate(data.name, res.data.data.display_url)
                        .then(() => {
                            console.log('user profile update');
                            const userInfo = {
                                photo: result.user.photoURL,
                                name: data.name,
                                email: data.email
                            }
                            axiosPublic.post('/user', userInfo)
                                .then(res => {
                                    console.log('first time user entry and save the user information in to the data base');
                                    if (res.data.insertedId) {
                                        reset()
                                        toast.success('user create success fully', { id: toastId })
                                        navigate('/')
                                    }
                                })
                        })
                        .catch(err => {
                            console.error(err);
                            toast.error(err.message)
                        })
                })
        }

    }


    return (
        <div className=''>
            <div className='flex lg:flex-row-reverse min-h-screen drop-shadow-lg bg-white '>
                <div className='flex-1 border  hidden md:block '>
                    <img className='w-full h-4/5  ' src={registerImg} alt="" />
                </div>
                <div className='flex-1  w-full mx-auto lg:w-[500px] px-5 py-3 shadow-lg '>
                    <h1 className='text-3xl  text-center font-serif '>Register To Pet Care</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* user name */}
                        <div className=''>
                            <label htmlFor="label" className='block  mb-2'>
                                <span className='label-text text-lg font-serif'>Name</span>
                            </label>
                            <input {...register('name', { required: true })} type="text" placeholder=' User name' className=' p-3 w-full border block pl-10 drop-shadow-lg outline-none ' />
                            {errors.name && <span className='text-red-500'>name is required</span>}
                        </div>
                        {/* photo url */}
                        <div className=''>
                            <label htmlFor="label" className='block  mb- mt-2'>
                                <span className='label-text text-lg font-serif'>PhotoURL</span>
                            </label>
                            <input {...register('image', { required: true })} type="file" className=' p-3 w-full border block pl-10 drop-shadow-lg outline-none ' />
                            {errors.image && <span className='text-red-500'>image is required</span>}
                        </div>
                        <div className=''>
                            <label htmlFor="label" className='block  mb-2 mt-2'>
                                <span className='label-text text-lg font-serif'>Email</span>
                            </label>
                            <input {...register('email', { required: true })} type="email" placeholder=' your email please' className=' p-3 w-full border block pl-10 drop-shadow-lg outline-none ' />
                            {errors.email && <span className='text-red-500'>email is required</span>}
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="label" className='block mb-2 '>
                                <span className='label-text text-lg font-serif'>Password</span>
                            </label>
                            <div className='relative'>
                                <input
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 10,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/

                                    })}
                                    type={showPassword ? "text" : "password"}
                                    name='password'
                                    placeholder='Your Password'
                                    className='p-3 w-full pl-10 drop-shadow-lg block outline-none border' />
                                {/* ---password validation start--- */}
                                {errors.password?.type === "required" && (
                                    <p className='text-red-500'>password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className='text-red-500'>password must be at least 6 characters  long</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className='text-red-500'>password must be at least 10 charecters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className='text-red-500'>password must at least one uppercase one lowerCase one number and one special characters</p>
                                )}
                                {/* --end-- */}
                                <span className='absolute right-4 top-5 text-xl' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                            </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className=''>
                            <input type="submit" value="Register" className=' duration-500 px-6 text-xl drop-shadow-xl rounded-lg py-3 outline-none bg-gray-200 hover:bg-sky-300 font-serif  ' />

                        </div>
                    </form>
                    <div className="divider">Login with social account</div>
                    <div className='flex justify-around '>
                        <GoogleLogin></GoogleLogin>
                        <GithubLogin></GithubLogin>
                    </div>
                    <p className='text-center mt-5 block text-lg font-serif shadow-inner '>Already have an account? <Link to='/login' className='underline underline-offset-4  decoration-1 p-1 text-blue-500 text-lg '>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default Register;
=======
export default Register;
=======
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
    console.log(data);
    const toastId = toast.loading("creating user");
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_upload_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log("user image hosting imgbb", res.data);
    if (res.data.success) {
      createUser(data.email, data.password).then((result) => {
        console.log("user create", result.user);
        userProfileUpdate(data.name, res.data.data.display_url)
          .then(() => {
            console.log("user profile update");
            const userInfo = {
              photo: result.user.photoURL,
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/user", userInfo).then((res) => {
              console.log(
                "first time user entry and save the user information in to the data base"
              );
              if (res.data.insertedId) {
                reset();
                toast.success("user create success fully", { id: toastId });
                navigate("/");
              }
            });
          })
          .catch((err) => {
            console.error(err);
            toast.error(err.message);
          });
      });
    }
  };

  return (
    <div className="">
      <div className="flex lg:flex-row-reverse min-h-screen drop-shadow-lg bg-white ">
        <div className="flex-1 border  hidden md:block ">
          <img className="w-full h-4/5  " src={registerImg} alt="" />
        </div>
        <div className="flex-1  w-full mx-auto lg:w-[500px] px-5 py-3 shadow-lg ">
          <h1 className="text-3xl  text-center font-serif ">
            Register To Pet Care
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* user name */}
            <div className="">
              <label htmlFor="label" className="block  mb-2">
                <span className="label-text text-lg font-serif">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder=" User name"
                className=" p-3 w-full border block pl-10 drop-shadow-lg outline-none "
              />
              {errors.name && (
                <span className="text-red-500">name is required</span>
              )}
            </div>
            {/* photo url */}
            <div className="">
              <label htmlFor="label" className="block  mb- mt-2">
                <span className="label-text text-lg font-serif">PhotoURL</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="file"
                className=" p-3 w-full border block pl-10 drop-shadow-lg outline-none "
              />
              {errors.image && (
                <span className="text-red-500">image is required</span>
              )}
            </div>
            <div className="">
              <label htmlFor="label" className="block  mb-2 mt-2">
                <span className="label-text text-lg font-serif">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder=" your email please"
                className=" p-3 w-full border block pl-10 drop-shadow-lg outline-none "
              />
              {errors.email && (
                <span className="text-red-500">email is required</span>
              )}
            </div>
            <div className="mt-5">
              <label htmlFor="label" className="block mb-2 ">
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
                  name="password"
                  placeholder="Your Password"
                  className="p-3 w-full pl-10 drop-shadow-lg block outline-none border"
                />
                {/* ---password validation start--- */}
                {errors.password?.type === "required" && (
                  <p className="text-red-500">password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    password must be at least 6 characters long
                  </p>
                )}
                {/* {errors.password?.type === "maxLength" && (
                                    <p className='text-red-500'>password must be at least 10 charecters</p>
                                )} */}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    password must at least one uppercase one lowerCase one
                    number and one special characters
                  </p>
                )}
                {/* --end-- */}
                <span
                  className="absolute right-4 top-5 text-xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="">
              <input
                type="submit"
                value="Register"
                className=" duration-500 px-6 text-xl drop-shadow-xl rounded-lg py-3 outline-none bg-gray-200 hover:bg-sky-300 font-serif  "
              />
            </div>
          </form>
          <div className="divider">Login with social account</div>
          <div className="flex justify-around ">
            <GoogleLogin></GoogleLogin>
            <GithubLogin></GithubLogin>
          </div>
          <p className="text-center mt-5 block text-lg font-serif shadow-inner ">
            Already have an account?{" "}
            <Link
              to="/login"
              className="underline underline-offset-4  decoration-1 p-1 text-blue-500 text-lg "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
