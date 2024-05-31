import { useAuth } from "@/context/Auth";
import { axiosProtected } from "@/lib/axios";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const Logout = () => {
  const { setToken } = useAuth();
  useEffect(() => {
    setToken(null);
    delete axiosProtected.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  });
  return <Navigate to="/dashboard" />;
};

export default Logout;
