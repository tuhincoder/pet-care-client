// import { NavLink, Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import { FaHome } from "react-icons/fa";
// import useAdmin from "../hooks/useAdmin";
// import logoImg from '../assets/images/logo/profile.jpg'

// const DashboardLayout = () => {
//     const { user } = useAuth()
//     const [isAdmin] = useAdmin()

//     // const Admin = true;
//     return (
//         <div className=" flex flex-col md:flex-row ">
//             <div className="md:w-64 bg-white md:min-h-screen py-8 drop-shadow-xl overflow-y-scroll ">
//                 <div className="mx-auto">

//                     <img className="w-24 mx-auto rounded-full " src={user?.photoURL ? user?.photoURL : logoImg} alt="" />

//                     <h2 className="text-center text-xl font-semibold pt-4">{user?.displayName}</h2>
//                     <h2 className="text-center font-semibold ">{user?.email}</h2>

//                 </div>
//                 <div className="divider"></div>

//                 {isAdmin ? <h1 className="text-xl text-center uppercase text-sky-300 ">Admin Dashboard</h1>
//                     :
//                     <h1 className="text-xl text-center uppercase text-sky-300 ">User Dashboard</h1>
//                 }
//                 <ul className="menu px-2 mt-4 md:w-full w-1/2 mx-auto  ">

//                     {
//                         isAdmin ? <>
//                             {/* admin */}
//                             <NavLink to="/dashboard/adminHome" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-200  hover:text-white hover:bg-sky-300 border-s-4 mb-5"
//                                 :
//                                 "mb-3 bg-gray-200 border border-sky-300 py-2 rounded text-center text-xl font-sans hover:text-white hover:bg-sky-300  "}>Admin Home</NavLink>

//                             <NavLink to="/dashboard/allUsers" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-200  hover:text-white hover:bg-sky-300 border-s-4 mb-5"
//                                 :
//                                 "mb-3 bg-gray-200 border border-sky-300 py-2 rounded text-center text-xl font-sans hover:text-white hover:bg-sky-300  "}>all Users</NavLink>

//                             <NavLink to="/dashboard/allPetUser" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5"

//                                 :

//                                 "border border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}>All Pets</NavLink>

//                             <NavLink to="/dashboard/allAdoption" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5"
//                                 :
//                                 "border border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}>All Adoption</NavLink>

//                             {/* common  all user and admin*/}
//                             <div className="divider"></div>
//                             <NavLink to="/" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5 flex justify-center items-center"
//                                 :
//                                 "border flex justify-center items-center  border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}><FaHome className="mr-2" /> Home</NavLink>
//                         </>
//                             // only users
//                             :
//                             <>
//                                 <NavLink to="/dashboard/userHome" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-200  hover:text-white hover:bg-sky-300 border-s-4 mb-5"
//                                     :
//                                     "mb-3 bg-gray-200 border border-sky-300 py-2 rounded text-center text-xl font-sans hover:text-white hover:bg-sky-300  "}>User Home</NavLink>

//                                 <NavLink to="/dashboard/addAPet" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-200  hover:text-white hover:bg-sky-300 border-s-4 mb-5"
//                                     :
//                                     "mb-3 bg-gray-200 border border-sky-300 py-2 rounded text-center text-xl font-sans hover:text-white hover:bg-sky-300  "}>Add a Pet</NavLink>

//                                 <NavLink to="/dashboard/myAddedPets" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5"

//                                     :

//                                     "border border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}>My Added Pets</NavLink>

//                                 <NavLink to="/dashboard/createDonationCampaign" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5"
//                                     :
//                                     "border border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}>Create Donation Campaign</NavLink>

//                                 <NavLink to="/dashboard/myDonationCampaign" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5"

//                                     :

//                                     "border border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}>My Donation Campaign</NavLink>
//                                 <NavLink to="/dashboard/adoptionRequest" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5"

//                                     :

//                                     "border border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}>Adoption Request</NavLink>
//                                 <NavLink to="/dashboard/adoptionPaymentHistory" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5"

//                                     :

//                                     "border border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}>Adoption Payment </NavLink>
//                                 {/* common  all user and admin*/}
//                                 <div className="divider"></div>
//                                 <NavLink to="/" className={({ isActive }) => isActive ? "border border-sky-300 py-2 rounded text-center text-xl font-serif bg-sky-100 hover:text-white hover:bg-sky-300 border-s-4 mb-5 flex justify-center items-center"
//                                     :
//                                     "border flex justify-center items-center  border-sky-300 py-2 rounded text-center text-xl font-sans bg-gray-200 hover:text-white hover:bg-sky-300 mb-5"}><FaHome className="mr-2" /> Home</NavLink>

//                             </>
//                     }

//                 </ul>
//             </div>

//             <div className="flex-1 bg-white md:ml-3 p-10 ">

//                 <Outlet></Outlet>

//             </div>
//         </div >
//     );
// };

// export default DashboardLayout;
