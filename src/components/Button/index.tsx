import { StyledButton } from "./styles";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}
export function Button({ label, onClick, className }: ButtonProps) {
  return (
    <StyledButton className={className} onClick={onClick}>
      {label}
    </StyledButton>
  );
}
