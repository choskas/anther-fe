import { axiosProtected } from "@/lib/axios";
import {jwtDecode} from 'jwt-decode'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";


const AuthContext = createContext<{
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
}>({ token: null, setToken: () => {} });

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  useEffect(() => {
    if (token) {
      axiosProtected.defaults.headers.common["Authorization"] =
        "Bearer " + token;
      localStorage.setItem("token", token);
    } else {
      delete axiosProtected.defaults.headers.common["Authorization"];
      localStorage.removeItem("token");
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
