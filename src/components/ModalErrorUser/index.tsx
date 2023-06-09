import { useState } from "react";
import { StyledModal } from "./style";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export function ModalErrorUser() {
  const [isOpen, setIsOpen] = useState(true);
  const { notUser, setNotUser } = useAuth();
  function close() {
    setIsOpen(!isOpen);
    setNotUser(!notUser);
  }

  return isOpen ? (
    <StyledModal>
      <h3>You not logged or not register</h3>
      <button className="close-modal" onClick={close}>
        X
      </button>
      <p>
        Go <Link to={"/register"}>To register</Link>
      </p>
      <p>
        Yours already account? <Link to={"/login"}>To Login</Link>
      </p>
    </StyledModal>
  ) : (
    <></>
  );
}
