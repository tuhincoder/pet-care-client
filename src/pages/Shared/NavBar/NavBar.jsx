<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
import { Link } from "react-router-dom";
import NavSideBar from "./NavSideBar";
import NavDropDown from "./NavDropDown";
import logo from '../../../assets/images/logo/logo2.png'
import NavItem from "./NavItem";


const NavBar = () => {


    return (

        <div className="navbar  fixed top-0 z-10 w-full bg-white bg-opacity-95 h-24 rounded border-b-[1px]  max-w-screen-xl mx-auto shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <NavSideBar />
                    </ul>
                </div>
                <div className="hidden md:block">
                    <Link className="flex flex-col px-4 justify-center items-center text-stone-600 ">
                        <img className="w-8" src={logo} alt="" />
                        <h2 className="text-2xl font-serif"> Pet Care</h2>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavItem></NavItem>
                </ul>
            </div>
            <div className="navbar-end">
                <NavDropDown />
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default NavBar;
=======
export default NavBar;
=======
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../assets/images/logo/logo2.png";
import logoImg from "../../../assets/images/logo/profile.jpg";
import NavSideBar from "./NavSideBar";
import NavItem from "./NavItem";

const NavBar = () => {
  const { user, logOutUser } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex justify-center">
      {" "}
      {/* Container to center the navbar on large screens */}
      <nav className="navbar fixed top-0 z-50 w-full max-w-screen-xl mx-auto bg-white bg-opacity-95 backdrop-blur-sm border-b h-20 md:h-24 px-4 shadow-md lg:rounded-b-xl">
        {/* --- LEFT: Mobile Menu & Logo --- */}
        <div className="navbar-start flex items-center">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="btn btn-ghost lg:hidden mr-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>

          {/* Logo (Desktop & Mobile) */}
          <Link to="/" className="flex items-center gap-2">
            <img className="w-8 md:w-10" src={logo} alt="Pet Care" />
            <h2 className="text-xl md:text-2xl font-serif font-bold text-stone-700 hidden sm:block">
              Pet<span className="text-sky-500">Care</span>
            </h2>
          </Link>
        </div>

        {/* --- CENTER: Desktop Menu --- */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2 font-medium">
            <NavItem />
          </ul>
        </div>

        {/* --- RIGHT: User Profile --- */}
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar border-2 border-sky-100"
            >
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || logoImg} alt="User Profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-xl bg-white rounded-box w-52 border border-gray-100"
            >
              <li className="px-4 py-2 font-bold text-sky-600 border-b mb-2">
                {user?.displayName || "User"}
              </li>
              {user && (
                <li>
                  <Link to="/dashboard/userHome">Dashboard</Link>
                </li>
              )}
              <li className="mt-2">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600 border-none"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="btn btn-sm bg-sky-500 text-white hover:bg-sky-600 border-none"
                  >
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* --- SIDEBAR (Framer Motion) --- */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm shadow-2xl"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-64 bg-white z-[70] p-5 shadow-2xl"
            >
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <span className="font-bold text-xl font-serif text-sky-600">
                  PetCare Menu
                </span>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="btn btn-sm btn-circle btn-ghost"
                >
                  ✕
                </button>
              </div>
              <div onClick={() => setIsSidebarOpen(false)}>
                <NavSideBar />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
