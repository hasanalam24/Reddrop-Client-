import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const location = useLocation()



    if (loading) {
        return <span className="loading loading-spinner text-secondary"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
};

export default PrivateRoute;