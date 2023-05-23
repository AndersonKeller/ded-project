import { ReactNode, createContext, useState } from "react";
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
  async function signIn(data: LoginData) {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("ded-project:token", token);

      //navigate("dashboard");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
