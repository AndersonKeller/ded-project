import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";
import { StyledButton } from "../Button/Button";

export function Header() {
  const navigate = useNavigate();
  function goToLogin() {
    navigate("/login");
  }
  function goToRegister() {
    navigate("/register");
  }
  function goToHome() {
    navigate("/");
  }
  return (
    <StyledHeader>
      <h1>GODS & MYTHOLOGIES</h1>
      <nav>
        <StyledButton onClick={goToHome}>HOME</StyledButton>
        <StyledButton onClick={goToLogin}>LOGIN</StyledButton>
        <StyledButton onClick={goToRegister}>REGISTRAR</StyledButton>
      </nav>
    </StyledHeader>
  );
}
