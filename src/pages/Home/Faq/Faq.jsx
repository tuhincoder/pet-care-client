import { useForm } from "react-hook-form";
import Accordion from "./Accordion";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

const Faq = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Form submit হলে clean হবে
  };

  return (
    <section className="pt-10 bg-white  overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Main Wrapper */}
        <div className=" rounded-[3rem] p-6  border border-white shadow-sm">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* LEFT: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-800 uppercase tracking-tight">
                  Contact <span className="text-sky-500">Us</span>
                </h2>
                <div className="w-20 h-1.5 bg-sky-400 mt-3 rounded-full mx-auto lg:mx-0"></div>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-sky-100/50 space-y-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-600 ml-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full input input-bordered focus:ring-2 focus:ring-sky-400 border-slate-200 bg-slate-50"
                      {...register("name", { required: true })}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-sm font-semibold text-slate-600 ml-1">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      className="w-full input input-bordered focus:ring-2 focus:ring-sky-400 border-slate-200 bg-slate-50"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600 ml-1">
                    Subject
                  </label>
                  <input
                    {...register("subject", { required: true })}
                    type="text"
                    className="w-full input input-bordered focus:ring-2 focus:ring-sky-400 border-slate-200 bg-slate-50"
                    placeholder="Inquiry about..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-slate-600 ml-1">
                    Message
                  </label>
                  <textarea
                    {...register("textarea", { required: true })}
                    className="textarea textarea-bordered w-full h-32 focus:ring-2 focus:ring-sky-400 border-slate-200 bg-slate-50"
                    placeholder="Tell us how we can help..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn bg-sky-500 hover:bg-slate-800 text-white w-full border-none rounded-xl text-lg flex items-center gap-2 group transition-all duration-300"
                >
                  Send Message{" "}
                  <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* RIGHT: FAQ ACCORDION */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex-1 w-full"
            >
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-800 uppercase tracking-tight">
                  Common <span className="text-sky-500">FAQ</span>
                </h2>
                <div className="w-20 h-1.5 bg-sky-400 mt-3 rounded-full mx-auto lg:mx-0"></div>
              </div>

              <div className="space-y-4">
                <Accordion />
              </div>

              <div className="mt-10 p-6 border-l-4 border-sky-400 bg-sky-100/30 rounded-r-2xl italic text-slate-600">
                "Didn't find what you were looking for? Feel free to drop us a
                message and our experts will get back to you within 24 hours."
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
