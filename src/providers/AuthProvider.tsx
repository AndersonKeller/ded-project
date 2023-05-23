import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";

interface AuthProviderProps {
  children: ReactNode;
}
interface AuthContextValues {
  signIn: (data: LoginData) => void;
  loading: boolean;
}
export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);
export function AuthProvider({ children }: AuthProviderProps) {
  //const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([]);
  async function signIn(data: LoginData) {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("ded-project:token", token);
      retriveChars();
      //navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  }
  async function retriveChars() {
    try {
      const res = await api.get("/chars");
      console.log(res.data);
      setChars(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("ded-project:token");

    if (!token) {
      setTimeout(() => {
        setLoading(false);
      }, 1400);
    }

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    retriveChars();
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
