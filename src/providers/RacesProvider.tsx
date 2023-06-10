import { ReactNode, createContext, useEffect, useState } from "react";

import { api } from "../services/api";
export interface Stats {
  strength: number;
  dexterity: number;
  inteligence: number;
  damage: string;
  damageMin?: number;
  damageMax?: number;
  magic: string;
  magicMin?: number;
  magicMax?: number;
  armor?: number;
  critical?: number;
  damageBonus?: number;
  dodge?: number;
  life?: number;
  magicBonus?: number;
  mana?: number;
  precision?: number;
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
  setRaces: React.Dispatch<React.SetStateAction<Race[]>>;
  selectRace: Race;
  setSelectRace: React.Dispatch<React.SetStateAction<Race>>;
}
export const RaceContext = createContext<RaceProviderValues>(
  {} as RaceProviderValues
);
export function RaceProvider({ children }: RaceProviderProps) {
  const [races, setRaces] = useState([] as Race[]);
  const [selectRace, setSelectRace] = useState({} as Race);
  async function getRaces() {
    try {
      const res: Race[] = (await api.get("/races")).data;
      console.log(res);
      res.map((data) => {
        (data.stats.damage = `${data.stats.damageMin} - ${data.stats.damageMax}`),
          (data.stats.magic = `${data.stats.magicMin} - ${data.stats.magicMax}`);
      });
      res.map((data) => {
        delete data.stats.damageMin;
        delete data.stats.damageMax;
        delete data.stats.magicMin;
        delete data.stats.magicMax;
      });
      console.log(res);

      setRaces(res);
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
