import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CharCreate } from "../ClasseCard";
import { StyledModalCharCreate } from "./style";
import { CharData, schema } from "./validator";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { ModalErrorUser } from "../ModalErrorUser";
import { useEffect } from "react";
import { useChar } from "../../hooks/useChar";
import { useNavigate } from "react-router-dom";
interface ModalCharCreateProps {
  char: CharCreate;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export function ModalCharCreate({
  char,
  isOpen,
  setIsOpen,
}: ModalCharCreateProps) {
  const { user, notUser, setNotUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CharData>({
    resolver: zodResolver(schema),
  });
  const navigate = useNavigate();
  const { setMyChar } = useChar();
  async function createChar(data: CharData) {
    console.log(notUser);
    if (!user.name) {
      setNotUser(true);
    } else {
      data.classe = char.char.classe.name;
      data.race = char.char.race.name;
      console.log(data);
      try {
        const response = await api.post("/chars", data);
        console.log(response.data);
        setMyChar(response.data);
        navigate("/user/char");
      } catch (error) {
        console.log(error);
      }
    }
  }
  function close() {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    setNotUser(false);
  }, []);
  return isOpen ? (
    <StyledModalCharCreate>
      <section>
        <button className="close-modal" onClick={close}>
          &larr; Back to Select
        </button>
        <Form onSubmit={handleSubmit(createChar)}>
          <h3>RACE: {char.char.race.name}</h3>
          <h3>CLASSE: {char.char.classe.name}</h3>
          <Input label="Name" register={register("name")} />
          <Button label="CREATE" type="submit" />
        </Form>
      </section>
      {notUser && <ModalErrorUser />}
    </StyledModalCharCreate>
  ) : (
    <></>
  );
}
