import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/Login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { Race } from "./RacesProvider";
import { RegisterData } from "../pages/Register/validator";
interface Classe {
  name: string;
}
interface AuthProviderProps {
  children: ReactNode;
}
interface Char {
  name: string;
  classe: Classe;
  race: Race;
}
interface AuthContextValues {
  signIn: (data: LoginData) => void;
  createUser: (data: RegisterData) => void;
  loading: boolean;
  chars: Char[];
  setChars: React.Dispatch<React.SetStateAction<Char[]>>;
}
export const AuthContext = createContext<AuthContextValues>(
  {} as AuthContextValues
);
export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [chars, setChars] = useState([] as Char[]);
  async function signIn(data: LoginData) {
    try {
      const response = await api.post("/login", data);

      const { token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      localStorage.setItem("ded-project:token", token);
      retriveChars();
      navigate("/");
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
  async function createUser(data: RegisterData) {
    try {
      await api.post("/users", data);

      navigate("/login");
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
    setTimeout(() => {
      setLoading(false);
    }, 1400);
  }, []);
  return (
    <AuthContext.Provider
      value={{ createUser, signIn, loading, chars, setChars }}
    >
      {children}
    </AuthContext.Provider>
  );
}
