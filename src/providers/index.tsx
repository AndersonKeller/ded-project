import { ReactNode, createContext } from "react";
import { AuthProvider } from "./AuthProvider";
import { RaceProvider } from "./RacesProvider";
interface MainproviderProps {
  children: ReactNode;
}
interface MainProviderValues {}
export const MainContext = createContext<MainProviderValues>(
  {} as MainProviderValues
);
export function MainProvider({ children }: MainproviderProps) {
  return (
    <MainContext.Provider value={{}}>
      <RaceProvider>
        <AuthProvider>{children}</AuthProvider>
      </RaceProvider>
    </MainContext.Provider>
  );
}
