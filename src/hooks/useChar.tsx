import { useContext } from "react";
import { CharContext } from "../providers/CharProvider";

export function useChar() {
  const charContext = useContext(CharContext);
  return charContext;
}
