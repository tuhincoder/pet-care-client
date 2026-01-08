import { IoLocationSharp } from "react-icons/io5";
import contactImg from "../../assets/images/category/cats/details.jpg";
import { MdAddCall, MdOutgoingMail, MdSend } from "react-icons/md";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Map from "./Map";
import CoverImg from "../../components/common/CoverImg";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
    toast.success("Message sent! We will get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <IoLocationSharp />,
      title: "Visit Us",
      detail: "Uttara, Dhaka, BD",
      color: "bg-sky-500",
    },
    {
      icon: <MdAddCall />,
      title: "Call Us",
      detail: "+00 1538264947",
      color: "bg-blue-600",
    },
    {
      icon: <MdOutgoingMail />,
      title: "Email Us",
      detail: "petcare@gmail.com",
      color: "bg-indigo-600",
    },
  ];

  return (
    <div className="bg-gray-50 pb-20">
      <CoverImg image={contactImg} text={"Contact Us"} />

      <div className="container mx-auto px-4 md:px-10 lg:-mt-20 relative z-20">
        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center"
            >
              <div
                className={`${item.color} text-white p-4 rounded-full mb-3 text-2xl`}
              >
                {item.icon}
              </div>
              <h4 className="font-bold text-gray-800">{item.title}</h4>
              <p className="text-gray-500 text-sm">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Left Panel */}
          <div className="lg:w-1/3 bg-slate-900 p-10 text-white">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-slate-400 mb-8">
              Have questions about adoption? Our team is ready to help you find
              your perfect pet companion.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm bg-slate-800 p-4 rounded-lg">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span>We usually reply within 24 hours.</span>
              </div>
            </div>
          </div>

          {/* Right Form - Fixed Visibility */}
          <div className="lg:w-2/3 p-8 md:p-12">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500">
                      Name is required
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-semibold text-gray-700">
                    Email Address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="email@example.com"
                    className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500">
                      Email is required
                    </span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <input
                  {...register("subject", { required: true })}
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none"
                />
                {errors.subject && (
                  <span className="text-xs text-red-500">
                    Subject is required
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-700">
                  Your Message
                </label>
                <textarea
                  {...register("message", { required: true })}
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full border border-gray-300 bg-gray-50 p-3 rounded-lg focus:ring-2 focus:ring-sky-500 outline-none resize-none"
                ></textarea>
                {errors.message && (
                  <span className="text-xs text-red-500">
                    Message is required
                  </span>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full md:w-max px-10 bg-sky-500 hover:bg-slate-800 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MdSend /> Send Message
              </motion.button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[350px] md:h-[450px]">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
