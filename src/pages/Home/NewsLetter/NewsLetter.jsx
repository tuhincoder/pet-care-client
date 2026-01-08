import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoMailOpenOutline } from "react-icons/io5";

const NewsLetter = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputText, setInputText] = useState("");

  const handleConnect = (e) => {
    e.preventDefault();
    if (inputValue) {
      toast.success("You're connected to our newsletter!", {
        position: "top-center",
        autoClose: 3000,
      });
      setInputValue("");
      setInputText("");
    } else {
      setInputText("Please type your email address.");
    }
  };

  return (
    <section className=" pt-10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] bg-white shadow-[0px_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white overflow-hidden p-8 md:p-16 lg:p-20"
        >
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-sky-100 rounded-full blur-3xl opacity-60"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-3 text-sky-500 font-bold tracking-widest uppercase text-xs md:text-sm">
                <span className="p-2 bg-sky-100 rounded-lg">
                  <IoMailOpenOutline className="text-xl" />
                </span>
                <span>Join Our Community</span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-800 leading-tight">
                Don't Miss Any <br />
                <span className="text-sky-500 italic">Pet Updates!</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                Subscribe to get the latest food deals, health tips, and
                adoption stories directly in your inbox.
              </p>
            </div>

            <div className="w-full flex-1 max-w-xl">
              <form onSubmit={handleConnect} className="relative">
                <input
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    if (inputText) setInputText("");
                  }}
                  className="w-full pl-6 pr-36 md:pr-44 py-5 md:py-7 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 focus:outline-none focus:bg-white focus:ring-4 focus:ring-sky-100 transition-all duration-300 placeholder:text-slate-400 shadow-inner"
                  type="email"
                  placeholder="Your email address"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-6 md:px-12 bg-sky-500 hover:bg-slate-800 text-white font-bold rounded-xl transition-all duration-500 shadow-lg shadow-sky-200 flex items-center justify-center text-sm md:text-base uppercase"
                >
                  Connect
                </button>
              </form>

              {inputText && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-rose-500 text-sm font-medium italic ml-2"
                >
                  * {inputText}
                </motion.p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsLetter;
