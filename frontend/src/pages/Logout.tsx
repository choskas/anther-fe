import { useAuth } from "@/context/Auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    const {setToken} = useAuth()
    useEffect(() => {
        setToken(null)
        navigate('/', {replace: true})
    })
    return <div>Logout</div>;
}

export default Logout;