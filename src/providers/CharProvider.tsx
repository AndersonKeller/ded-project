import { ReactNode, createContext, useState } from "react";
import { Classe } from "./ClassesProvider";
import { Race, Stats } from "./RacesProvider";
import { User } from "./AuthProvider";

interface CharProviderProps {
  children: ReactNode;
}
interface CharProviderValues {
  myChar: Char;
  setMyChar: React.Dispatch<React.SetStateAction<Char>>;
}
interface Resistences {
  fire: number;
  cold: number;
  lighting: number;
}
export interface Char {
  classe: Classe;
  name: string;
  id: number;
  race: Race;
  resistences: Resistences;
  user: User;
  charsStats: Stats;
}
export const CharContext = createContext<CharProviderValues>(
  {} as CharProviderValues
);

export function CharProvider({ children }: CharProviderProps) {
  const [myChar, setMyChar] = useState<Char>({} as Char);
  return (
    <CharContext.Provider value={{ myChar, setMyChar }}>
      {children}
    </CharContext.Provider>
  );
}
