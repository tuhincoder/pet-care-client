<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
import useAuth from "../../../hooks/useAuth";
import ShoppingBadge from "../../../components/ShoppingBadge";

const NavSideBar = () => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
    const { user, logOutUser } = useAuth()


    const handleLogOut = () => {
        logOutUser()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (

        <div className="">
            <ul className="menu ">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/petListing'>Pet Listing</Link></li>
                <li><Link to='/donationCampaigns'>Donation Campaigns</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/inspiration'>Inspiration</Link></li>
                <li><Link to='/about'>About Us</Link></li>
                {user ? <button className="btn" onClick={handleLogOut}>LogOut</button> :
                    <li><Link to='/login'>Login</Link></li>}
                <button className="btn mt-5">
                    <ShoppingBadge></ShoppingBadge>
                </button>
            </ul>
        </div>

    );
};

<<<<<<< HEAD
export default NavSideBar;
=======
export default NavSideBar;
=======
  const { user, logOutUser } = useAuth();

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  // Framer Motion Variants for Stagger Effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Protiti link 0.1 second por por ashbe
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  // Link styling helper
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

      <motion.div
        variants={itemVariants}
        className="mt-6 pt-6 border-t border-gray-100 space-y-4"
      >
        {/* Shopping Cart / Badge */}
        <div className="flex items-center justify-between px-4 py-2 bg-sky-50 rounded-xl shadow-sm border border-sky-100">
          <span className="text-sm font-semibold text-sky-700">Your Cart</span>
          <ShoppingBadge />
        </div>

        {/* Authentication Button */}
        {user ? (
          <button
            className="w-full btn bg-red-50 hover:bg-red-500 text-red-500 hover:text-white border border-red-200 border-none transition-all duration-300"
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
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
