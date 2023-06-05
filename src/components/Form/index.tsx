import { ReactNode } from "react";
import { StyledForm } from "./style";
interface FormProps {
  children: ReactNode;
  onSubmit: () => void;
}
export function Form({ children, onSubmit }: FormProps) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}
