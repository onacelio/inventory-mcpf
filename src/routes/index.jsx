import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthGoogleContext } from "../contexts/authGoogle";

export default function PrivateRoutes() {
    const { signed } = useContext(AuthGoogleContext)

    return signed ? <Outlet /> : <Navigate to="/"/>
}