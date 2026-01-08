<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
import logoImg from '../../../assets/images/logo/profile.jpg'


const NavDropDown = () => {

    const { user, logOutUser } = useAuth()
    const [isAdmin] = useAdmin()

    const handleLogout = () => {
        logOutUser()
            .then(() => { })
            .catch(err => console.log(err))
    }


    return (
        <div>
            <div className="dropdown dropdown-end  ">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full ">

                        <img alt="user profile picture" src={user?.photoURL ? user?.photoURL : logoImg} />

                    </div>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 space-y-2">

                    <p className="text-lg text-center">{user?.displayName}</p>

                    {/* conditional Dashboard route */}
                    {user && !isAdmin && <li className="hover:text-sky-500"><Link to="/dashboard/userHome">Dashboard</Link></li>}

                    {user && isAdmin && <li className="hover:text-sky-500"><Link to="/dashboard/adminHome">Dashboard</Link></li>}
<<<<<<< HEAD
=======
=======
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../../hooks/useAuth";
// import useAdmin from "../../../hooks/useAdmin";
// import logoImg from '../../../assets/images/logo/profile.jpg'


// const NavDropDown = () => {

//     const { user, logOutUser } = useAuth()
//     const [isAdmin, isLoading] = useAdmin()

//     const handleLogout = () => {
//         logOutUser()
//             .then(() => { })
//             .catch(err => console.log(err))
//     }


//     return (
//         <div>
//             <div className="dropdown dropdown-end  ">
//                 <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                     <div className="w-12 rounded-full ">

//                         <img alt="user profile picture" src={user?.photoURL ? user?.photoURL : logoImg} />

//                     </div>
//                 </div>
//                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52 space-y-2">

//                     <p className="text-lg text-center">{user?.displayName}</p>


//                     {user && isAdmin && <li className="hover:text-sky-500"><Link to="/dashboard/adminHome">Dashboard</Link></li>}

//                     {/* conditional Dashboard route */}
//                     {user && !isAdmin && < li className="hover:text-sky-500"><Link to="/dashboard/userHome">Dashboard</Link></li>}
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)




<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ce9b2de (Initial commit)

                    {/* <li><a>Logout</a></li> */}
                    {
                        user ? <li>
                            <button onClick={handleLogout} className="hover:text-sky-500 bg-gray-400 text-white ">LogOut</button>
                        </li>
                            :
                            <li>
                                <NavLink to='/login' >Login</NavLink>
                            </li>
                    }
                </ul>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default NavDropDown;
=======
export default NavDropDown;
=======
//                     {/* <li><a>Logout</a></li> */}
//                     {
//                         user ? <li>
//                             <button onClick={handleLogout} className="hover:text-sky-500 bg-gray-400 text-white ">LogOut</button>
//                         </li>
//                             :
//                             <li>
//                                 <NavLink to='/login' >Login</NavLink>
//                             </li>
//                     }
//                 </ul>
//             </div>
//         </div >
//     );
// };

// export default NavDropDown;
>>>>>>> a45677b (Initial clean commit)
>>>>>>> ce9b2de (Initial commit)
