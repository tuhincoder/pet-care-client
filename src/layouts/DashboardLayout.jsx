import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {
  FaHome,
  FaUserFriends,
  FaPaw,
  FaHeart,
  FaPlusCircle,
  FaHistory,
  FaThLarge,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import logoImg from "../assets/images/logo/profile.jpg";
import { useState } from "react";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isOpen, setIsOpen] = useState(false); // Mobile drawer state

  const toggleDrawer = () => setIsOpen(!isOpen);

  const activeLink =
    "flex items-center gap-3 px-4 py-3 rounded-xl bg-sky-500 text-white shadow-md shadow-sky-200 transition-all duration-300 mb-2 font-medium";
  const normalLink =
    "flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-sky-50 hover:text-sky-600 transition-all duration-300 mb-2 font-medium";

  // Navigation Links Logic (Common for both Mobile & Desktop)
  const navLinks = (
    <div className="flex flex-col">
      <p className="text-[10px] uppercase font-bold text-slate-400 px-4 mb-4 tracking-widest">
        Main Menu
      </p>
      {isAdmin ? (
        <>
          <NavLink
            to="/dashboard/adminHome"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaThLarge className="text-lg" /> Admin Home
          </NavLink>
          <NavLink
            to="/dashboard/allUsers"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaUserFriends className="text-lg" /> All Users
          </NavLink>
          <NavLink
            to="/dashboard/allPetUser"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaPaw className="text-lg" /> All Pets
          </NavLink>
          <NavLink
            to="/dashboard/allAdoption"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaHeart className="text-lg" /> All Adoption
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to="/dashboard/userHome"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaThLarge className="text-lg" /> My Home
          </NavLink>
          <NavLink
            to="/dashboard/addAPet"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaPlusCircle className="text-lg" /> Add a Pet
          </NavLink>
          <NavLink
            to="/dashboard/myAddedPets"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaPaw className="text-lg" /> My Pets
          </NavLink>
          <NavLink
            to="/dashboard/createDonationCampaign"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <MdCampaign className="text-xl" /> Create Donation
          </NavLink>
          <NavLink
            to="/dashboard/myDonationCampaign"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaHistory className="text-lg" /> My Donations
          </NavLink>
          <NavLink
            to="/dashboard/adoptionRequest"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaHeart className="text-lg" /> Adoption Requests
          </NavLink>
          <NavLink
            to="/dashboard/adoptionPaymentHistory"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            <FaHistory className="text-lg" /> Payment History
          </NavLink>
        </>
      )}
      <div className="divider my-4 opacity-50 px-2"></div>
      <NavLink to="/" className={normalLink}>
        <FaHome className="text-lg text-sky-500" /> Back to Website
      </NavLink>
      <button
        onClick={() => logOut()}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-rose-500 hover:bg-rose-50 transition-all duration-300 font-medium mt-auto"
      >
        <FaSignOutAlt className="text-lg" /> Logout Account
      </button>
    </div>
  );

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-slate-50">
      {/* --- MOBILE TOP NAVBAR --- */}
      <div className="md:hidden flex items-center justify-between bg-white px-6 py-4 border-b border-slate-100 sticky top-0 z-[60]">
        <h2 className="text-xl font-black text-sky-600 uppercase tracking-tighter">
          PetCare
        </h2>
        <button
          onClick={toggleDrawer}
          className="p-2 bg-sky-50 text-sky-600 rounded-lg"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* --- SIDEBAR (Desktop: Visible | Mobile: Hidden until Toggle) --- */}
      <div
        className={`
        fixed inset-y-0 left-0 z-[100] w-72 bg-white border-r border-slate-100 shadow-xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:shadow-sm
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="sticky top-0 h-screen flex flex-col">
          {/* User Profile Section */}
          <div className="p-8 text-center bg-gradient-to-b from-sky-50 to-white">
            <div className="relative inline-block">
              <img
                className="w-20 h-20 mx-auto rounded-2xl object-cover ring-4 ring-white shadow-lg"
                src={user?.photoURL ? user?.photoURL : logoImg}
                alt="Profile"
              />
              <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-800 truncate px-2">
              {user?.displayName}
            </h2>
            <div className="mt-2">
              <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-wider font-bold bg-sky-100 text-sky-600">
                {isAdmin ? "Admin Access" : "Pet Lover"}
              </span>
            </div>
          </div>

          <div className="divider px-6 opacity-50 my-0"></div>

          {/* Navigation Scroll Area */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 scrollbar-hide">
            {navLinks}
          </nav>
        </div>
      </div>

      {/* --- OVERLAY (Mobile only) --- */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] md:hidden"
          onClick={toggleDrawer}
        ></div>
      )}

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 p-4 md:p-8 lg:p-10 min-h-screen w-full">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[2rem] p-5 md:p-8 lg:p-10 shadow-sm border border-slate-100 min-h-[85vh]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
