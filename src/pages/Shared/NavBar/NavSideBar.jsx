import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import useAuth from "../../../hooks/useAuth";
import ShoppingBadge from "../../../components/ShoppingBadge";

const NavSideBar = () => {
  const { user, logOutUser } = useAuth();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  // Framer Motion Variants for Staggered Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const activeStyle =
    "bg-sky-50 text-sky-600 font-bold border-r-4 border-sky-500";
  const normalStyle =
    "text-stone-600 hover:bg-sky-50 hover:text-sky-500 transition-all duration-300 py-3 px-4 rounded-lg flex items-center";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pet Listing", path: "/petListing" },
    { name: "Donation Campaigns", path: "/donationCampaigns" },
    { name: "Gallery", path: "/gallery" },
    { name: "Inspiration", path: "/inspiration" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <motion.div
      className="flex flex-col h-full"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Navigation Links */}
      <ul className="space-y-2">
        {navLinks.map((link) => (
          <motion.li key={link.path} variants={itemVariants}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? `${normalStyle} ${activeStyle}` : normalStyle
              }
            >
              {link.name}
            </NavLink>
          </motion.li>
        ))}
      </ul>

      {/* Shopping & Auth Section */}
      <motion.div
        variants={itemVariants}
        className="mt-6 pt-6 border-t border-gray-100 space-y-4"
      >
        <div className="flex items-center justify-between px-4 py-2 bg-sky-50 rounded-xl shadow-sm border border-sky-100">
          <span className="text-sm font-semibold text-sky-700">Your Cart</span>
          <ShoppingBadge />
        </div>

        {user ? (
          <button
            className="w-full btn bg-red-50 hover:bg-red-500 text-red-500 hover:text-white border-none transition-all duration-300"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="w-full block">
            <button className="w-full btn bg-sky-500 hover:bg-sky-600 text-white border-none">
              Login Now
            </button>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};

export default NavSideBar;
