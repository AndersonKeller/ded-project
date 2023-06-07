import { StyledButton } from "./styles";
interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}
export function Button({
  label,
  onClick,
  className,
  type,
  disabled,
}: ButtonProps) {
  return (
    <StyledButton
      type={type ? type : "button"}
      className={className}
      onClick={onClick}
      disabled={disabled ? disabled : false}
    >
      {label}
    </StyledButton>
  );
}
