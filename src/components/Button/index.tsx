import { StyledButton } from "./styles";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}
export function Button({ label, onClick, className, type }: ButtonProps) {
  return (
    <StyledButton
      type={type ? type : "button"}
      className={className}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}
