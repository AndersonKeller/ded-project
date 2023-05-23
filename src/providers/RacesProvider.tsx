import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../services/api";
export interface Race {
  name: string;
  description: string;
}
interface RaceProviderProps {
  children: ReactNode;
}
interface RaceProviderValues {
  races: Race[];
  setRaces: React.Dispatch<React.SetStateAction<never[]>>;
}
export const RaceContext = createContext<RaceProviderValues>(
  {} as RaceProviderValues
);
export function RaceProvider({ children }: RaceProviderProps) {
  const [races, setRaces] = useState([]);
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
    <RaceContext.Provider value={{ races, setRaces }}>
      {children}
    </RaceContext.Provider>
  );
}
