/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loader/Loading";


const AdminRout = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Loading />
    }

    if (user && isAdmin) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRout;