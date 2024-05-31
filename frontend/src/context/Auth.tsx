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
import { IUser } from "./types";


const AuthContext = createContext<{
  token: string | null;
  setToken: Dispatch<SetStateAction<string | null>>;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
}>({ token: null, setToken: () => {}, user: null, setUser: () => {}});

const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<IUser | null>(localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token") as string) : null);
console.log(user)
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
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
