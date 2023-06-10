import { ReactNode, createContext } from "react";
import { AuthProvider } from "./AuthProvider";
import { RaceProvider } from "./RacesProvider";
import { ClassesProvider } from "./ClassesProvider";
import { CharProvider } from "./CharProvider";
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
        <ClassesProvider>
          <AuthProvider>
            <CharProvider>{children}</CharProvider>
          </AuthProvider>
        </ClassesProvider>
      </RaceProvider>
    </MainContext.Provider>
  );
}
