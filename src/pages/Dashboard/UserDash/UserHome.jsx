import {
  FaShoppingCart,
  FaUsers,
  FaHandsHelping,
  FaCalendarCheck,
} from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { MdOutlinePets } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UserHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user-stats");
      return res.data;
    },
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row md:items-end gap-2">
        <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight">
          Hi,{" "}
          <span className="text-sky-500">
            {user?.displayName?.split(" ")[0] || "Member"}!
          </span>
        </h1>
        <p className="text-slate-400 font-bold text-lg mb-1 md:ml-2 opacity-70">
          Welcome back to your sanctuary.
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pet Listing Card */}
        <div className="relative overflow-hidden group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-sky-100 transition-all duration-500">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <MdOutlinePets size={100} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 mb-6">
              <MdOutlinePets size={28} />
            </div>
            <h3 className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-1">
              Pet Listings
            </h3>
            <div className="text-4xl font-black text-slate-800">
              {data?.petListing || 0}
            </div>
          </div>
        </div>

        {/* Food Stats Card */}
        <div className="relative overflow-hidden group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-rose-100 transition-all duration-500">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-rose-500">
            <IoFastFoodOutline size={100} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 mb-6">
              <IoFastFoodOutline size={28} />
            </div>
            <h3 className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-1">
              Food Inventory
            </h3>
            <div className="text-4xl font-black text-slate-800">
              {data?.petFood || 0}
            </div>
            <p className="text-xs text-green-500 font-bold mt-2">+21% Growth</p>
          </div>
        </div>

        {/* Cart Stats Card */}
        <div className="relative overflow-hidden group bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-amber-100 transition-all duration-500 lg:col-span-1 sm:col-span-2 lg:col-auto">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-amber-500">
            <FaShoppingCart size={100} />
          </div>
          <div className="relative z-10">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6">
              <FaShoppingCart size={24} />
            </div>
            <h3 className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-1">
              Cart Views
            </h3>
            <div className="text-4xl font-black text-slate-800">
              {data?.addToCart || 0}
            </div>
            <p className="text-xs text-amber-600 font-bold mt-2">
              Check for discounts!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Detailed Stats & Daily Plan */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
        {/* Secondary Stats Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-3 mb-6 uppercase tracking-tight">
            <span className="w-8 h-1 bg-sky-500 rounded-full"></span>
            Community Impact
          </h2>

          <div className="flex items-center justify-between p-6 bg-slate-900 rounded-[24px] text-white">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl">
                <FaHandsHelping className="text-sky-400" />
              </div>
              <span className="font-bold text-lg">Total Donations</span>
            </div>
            <span className="text-2xl font-black">15+</span>
          </div>

          <div className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-[24px]">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-sky-50 rounded-xl">
                <FaUsers className="text-sky-500" />
              </div>
              <span className="font-bold text-slate-700 text-lg">
                Platform Users
              </span>
            </div>
            <span className="text-2xl font-black text-slate-800">
              {data?.user || 0}
            </span>
          </div>
        </div>

        {/* Daily Plan Section */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-8 rounded-[40px] border border-yellow-200 relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <FaCalendarCheck className="text-amber-600 text-xl" />
              <h2 className="text-xl font-black text-amber-900 uppercase tracking-tighter">
                Your Everyday Plan
              </h2>
            </div>
            <h4 className="text-3xl font-black text-amber-950 leading-tight mb-4">
              Pet Care Routine
            </h4>
            <p className="text-amber-800/80 font-medium text-lg leading-relaxed">
              "We want to ensure the maximum happiness and health for your furry
              companions every single day."
            </p>
            <button className="mt-6 px-6 py-3 bg-amber-950 text-white rounded-2xl font-bold text-sm hover:scale-105 transition-transform active:scale-95">
              View Schedule
            </button>
          </div>
          <div className="absolute -bottom-10 -right-10 text-amber-200/50 rotate-12">
            <MdOutlinePets size={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
