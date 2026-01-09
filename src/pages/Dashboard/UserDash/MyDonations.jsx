import CoverText from "../../../components/common/CoverText";
import { FaHistory, FaTools } from "react-icons/fa";

const MyDonations = () => {
  return (
    <div className="pb-10">
      <CoverText
        heading={"My Donation History"}
        subHeading={"View all your past contributions and payments"}
      />

      <div className="mt-12 flex flex-col items-center justify-center bg-white rounded-[2rem] border border-slate-100 shadow-sm p-10 md:p-20 text-center">
        <div className="w-24 h-24 bg-sky-50 rounded-full flex items-center justify-center text-sky-500 mb-6 animate-pulse">
          <FaTools size={40} />
        </div>
        <h2 className="text-3xl font-black text-slate-800 tracking-tight">
          Feature Coming Soon!
        </h2>
        <p className="mt-4 text-slate-500 max-w-md mx-auto leading-relaxed">
          We are currently building this feature to help you track every penny
          you spend on pet care. Stay tuned!
        </p>

        <div className="mt-8 flex gap-3">
          <div className="px-4 py-2 bg-slate-50 text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest">
            Status: Under Development
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDonations;
