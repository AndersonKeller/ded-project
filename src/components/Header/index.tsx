import { useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";
import { Button } from "../Button";

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
      <h1>D&D PROJECT</h1>
      <nav>
        <Button onClick={goToHome} label="HOME" />
        <Button onClick={goToLogin} label="LOGIN" />
        <Button onClick={goToRegister} label="REGISTER" />
      </nav>
    </StyledHeader>
  );
}
