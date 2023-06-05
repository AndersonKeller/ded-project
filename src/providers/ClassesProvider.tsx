import { ReactNode, createContext, useEffect, useState } from "react";
import { Stats } from "./RacesProvider";
import { api } from "../services/api";
export interface Classe {
  name: string;
  description: string;
  stats: Stats;
}
interface ClassesproviderValues {
  classes: Classe[];
  setClasses: React.Dispatch<React.SetStateAction<Classe[]>>;
  selectClasse: Classe;
  setSelectClasse: React.Dispatch<React.SetStateAction<Classe>>;
}
interface ClasseproviderProps {
  children: ReactNode;
}
export const ClassesContext = createContext<ClassesproviderValues>(
  {} as ClassesproviderValues
);
export function ClassesProvider({ children }: ClasseproviderProps) {
  const [classes, setClasses] = useState([] as Classe[]);
  const [selectClasse, setSelectClasse] = useState({} as Classe);
  async function getClasses() {
    try {
      const res: Classe[] = (await api.get("/classes")).data;
      console.log(res);
      setClasses(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getClasses();
  }, []);
  return (
    <ClassesContext.Provider
      value={{ classes, selectClasse, setClasses, setSelectClasse }}
    >
      {children}
    </ClassesContext.Provider>
  );
}
