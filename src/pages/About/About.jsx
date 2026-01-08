import { FaCat } from "react-icons/fa";
import aboutMainImg from "../../assets/images/gallery/gallery.jpg";
import aboutBanner from "../../assets/images/category/cats/cat3.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FaDog } from "react-icons/fa6";
import { MdOutlinePets } from "react-icons/md";
import TeamMember from "./TeamMember";
import CoverImg from "../../components/common/CoverImg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="pb-10">
      {/* Banner Section */}
      <CoverImg image={aboutBanner} text={"About Page"} />

      {/* Welcome Section */}
      <div className="container mx-auto px-4">
        <div className="mt-10">
          <SectionTitle
            subHeading="Because We Really Care Welcome Your Pets"
            Heading="Welcome to Petenica"
          />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
          {/* Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <img
              className="rounded-2xl shadow-xl w-full object-cover h-[300px] md:h-[450px]"
              src={aboutMainImg}
              alt="About Us"
            />
          </motion.div>

          {/* Content - Static Responsive */}
          <div className="flex-1 space-y-5">
            <h3 className="text-xl font-bold text-sky-500 uppercase tracking-wider">
              About us
            </h3>
            <h1 className="text-3xl md:text-5xl font-serif leading-tight text-slate-800">
              Your pet deserves the{" "}
              <span className="text-sky-500">best service</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              Broadcast neglectful and poignantly well until and some listlessly
              amidst successful concentrically ably dachshund more far but
              forwardly echidna outside tiger split thanks far vibrantly gosh
              hence pangolin.
            </p>
            <p className="text-slate-500 text-lg leading-relaxed">
              As abandoned winced this more far wow jeepers near more wow
              goodness so revealed much along worm some grasshopper.
            </p>
            <button className="btn bg-sky-500 hover:bg-slate-800 text-white border-none px-8 rounded-full transition-all duration-300">
              View More Service
            </button>
          </div>
        </div>

        {/* Care Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20">
          {/* Card 1 */}
          <div className="hover:bg-sky-500 hover:text-white group duration-500 transition flex items-center p-10 bg-white shadow-lg border-b-4 border-sky-400 rounded-xl">
            <FaCat className="text-6xl mr-5 text-sky-400 group-hover:text-white transition-colors" />
            <div>
              <h2 className="text-2xl font-serif font-bold capitalize">
                We Care Pets
              </h2>
              <p className="text-md opacity-80">Pet Sheltering & Adoption</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="hover:bg-sky-500 hover:text-white group duration-500 transition flex items-center p-10 bg-white shadow-lg border-b-4 border-sky-400 rounded-xl">
            <FaDog className="text-6xl mr-5 text-sky-400 group-hover:text-white transition-colors" />
            <div>
              <h2 className="text-2xl font-serif font-bold capitalize">
                We Heal Pets
              </h2>
              <p className="text-md opacity-80">Quick Veterinary Services</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="hover:bg-sky-500 hover:text-white group duration-500 transition flex items-center p-10 bg-white shadow-lg border-b-4 border-sky-400 rounded-xl">
            <MdOutlinePets className="text-6xl mr-5 text-sky-400 group-hover:text-white transition-colors" />
            <div>
              <h2 className="text-2xl font-serif font-bold capitalize">
                We Love Pets
              </h2>
              <p className="text-md opacity-80">Show love donate us</p>
            </div>
          </div>
        </div>

        {/* Team Section Header */}
        <div className="mt-20 mb-10">
          <div className="border-s-8 border-sky-400 ps-4">
            <h2 className="text-4xl font-serif font-bold text-slate-800">
              Our Team Members
            </h2>
            <h1 className="text-lg text-slate-500 mt-1 italic">
              Because We Really Care About Your Pets
            </h1>
          </div>
        </div>

        {/* Team Members List */}
        <TeamMember />
      </div>
    </div>
  );
};

export default About;
