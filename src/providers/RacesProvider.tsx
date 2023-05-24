import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../services/api";
export interface Stats {
  strength: number;
  dexterity: number;
  inteligence: number;
}
export interface Race {
  name: string;
  description: string;
  stats: Stats;
  image?: string;
}
interface RaceProviderProps {
  children: ReactNode;
}
interface RaceProviderValues {
  races: Race[];
  setRaces: React.Dispatch<React.SetStateAction<never[]>>;
  selectRace: Race;
  setSelectRace: React.Dispatch<React.SetStateAction<Race>>;
}
export const RaceContext = createContext<RaceProviderValues>(
  {} as RaceProviderValues
);
export function RaceProvider({ children }: RaceProviderProps) {
  const [races, setRaces] = useState([]);
  const [selectRace, setSelectRace] = useState({} as Race);
  async function getRaces() {
    try {
      const res = await api.get("/races");
      console.log(res.data);
      setRaces(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getRaces();
  }, []);
  return (
    <RaceContext.Provider
      value={{ races, setRaces, selectRace, setSelectRace }}
    >
      {children}
    </RaceContext.Provider>
  );
}
