import inspirationImg from "../../assets/images/category/cats/cat4.jpg";
import inspiration1 from "../../assets/images/inspawaration/inspiration1.jpg";
import inspiration2 from "../../assets/images/inspawaration/inspiration2.jpg";
import inspiration3 from "../../assets/images/inspawaration/inspiration3.jpg";
import inspiration4 from "../../assets/images/category/cats/inspiration6.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CoverImg from "../../components/common/CoverImg";
import { motion } from "framer-motion";
import { FaRegCalendarAlt, FaRegComments } from "react-icons/fa";

const Inspiration = () => {
  // Shudhu image er jonno animation variant
  const imageAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <div className="bg-white pb-20">
      <CoverImg image={inspirationImg} text={"Inspiration Page"} />

      <div className="container mx-auto px-4">
        <SectionTitle
          subHeading="We want to ensure the happiness for the pets."
          Heading="Inspirational Image and Text"
        />

        {/* Main Content Wrapper - Responsive Width */}
        <div className="w-full lg:w-3/4 mx-auto space-y-20">
          {/* --- Post 1 --- */}
          <div className="group">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnimation}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                className="w-full h-auto md:h-[500px] object-cover"
                src={inspiration1}
                alt="Pet Care"
              />
            </motion.div>

            <div className="flex flex-wrap gap-4 text-sm md:text-lg mt-5 mb-4 text-slate-500">
              <p className="text-sky-400 border-s-4 border-sky-400 ps-2 flex items-center gap-2 font-medium">
                <FaRegCalendarAlt /> March 18 2024
              </p>
              <p className="border-s-2 ps-3">Pet Care</p>
              <p className="border-s-2 ps-3">Pet Grooming</p>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-800 hover:text-sky-500 transition-colors">
                Online Pet Everything Your Pet Needs
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                The domestic dog is a domesticated descendant of the wolf. The
                dog derived from an ancient, extinct wolf, and the modern grey
                wolf is the dog&apos;s nearest living relative. The dog was the
                first species to be domesticated, by hunter–gatherers.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Within a few hours 3-5 days after vaccination for the dog to
                begin developing immunity. Until a puppy has received its entire
                vaccine series, exposure to parvovirus should be minimized.
              </p>
            </div>
          </div>

          {/* --- Post 2 --- */}
          <div className="group">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnimation}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                className="w-full h-auto md:h-[500px] object-cover"
                src={inspiration2}
                alt="Cat Safety"
              />
            </motion.div>

            <div className="flex flex-wrap gap-4 text-sm md:text-lg mt-5 mb-4 text-slate-500">
              <p className="text-sky-400 border-s-4 border-sky-400 ps-2 flex items-center gap-2 font-medium">
                <FaRegCalendarAlt /> January 10 2024
              </p>
              <p className="border-s-2 ps-3">Pet Care</p>
              <p className="border-s-2 ps-3 flex items-center gap-2">
                <FaRegComments /> 4 Comments
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-800 hover:text-sky-500 transition-colors">
                Some Toughly Useful Much Walking Before
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                By addressing these areas, you can ensure your cat leads a
                fulfilling and healthy life. Regularly observe your cat for any
                changes in behavior, appetite, or appearance.
              </p>

              {/* Safety Box - Fully Responsive */}
              <div className="border-l-4 border-sky-400 bg-slate-100 p-6 rounded-r-xl transition-all duration-500 hover:bg-slate-800 hover:text-white">
                <h4 className="text-xl text-sky-400 font-bold mb-1">
                  Cat Safety:
                </h4>
                <p className="text-lg font-bold mb-3 italic">
                  Indoor vs Outdoor
                </p>
                <ul className="list-disc px-5 space-y-2">
                  <li>
                    <span className="font-bold">Indoor Living:</span> Generally
                    safer, protecting your cat from traffic and diseases.
                  </li>
                  <li>
                    <span className="font-bold">Outdoor Supervision:</span> If
                    they go outside, ensure they are kept in a secure area like
                    a catio.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="divider opacity-50"></div>

          {/* --- Post 3 --- */}
          <div className="group">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageAnimation}
              className="overflow-hidden rounded-xl shadow-md"
            >
              <img
                className="w-full h-auto md:h-[500px] object-cover"
                src={inspiration3}
                alt="Happiness"
              />
            </motion.div>
            <div className="flex flex-wrap gap-4 text-sm md:text-lg mt-5 mb-4 text-slate-500">
              <p className="text-sky-400 border-s-4 border-sky-400 ps-2 flex items-center gap-2 font-medium font-medium">
                <FaRegCalendarAlt /> February 08 2024
              </p>
              <p className="border-s-2 ps-3">Pet Care</p>
              <p className="border-s-2 ps-3 flex items-center gap-2">
                <FaRegComments /> 1 Comment
              </p>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              We want to ensure the happiness for the pets.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              The dog was the first species to be domesticated by
              hunter-gatherers. Immunity development is crucial through a proper
              vaccine series at 6, 12, and 16 weeks old.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
