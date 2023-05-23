import { ReactNode } from "react";
import { StyledContainer } from "./style";
interface ContainerChildren {
  children: ReactNode;
}
export function Container({ children }: ContainerChildren) {
  return <StyledContainer>{children}</StyledContainer>;
}
