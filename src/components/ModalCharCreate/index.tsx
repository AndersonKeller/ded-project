import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CharCreate } from "../ClasseCard";
import { StyledModalCharCreate } from "./style";
import { CharData, schema } from "./validator";
import { Form } from "../Form";
import { Input } from "../Input";
import { Button } from "../Button";
import { api } from "../../services/api";

export function ModalCharCreate({ char }: CharCreate) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CharData>({
    resolver: zodResolver(schema),
  });
  async function createChar(data: CharData) {
    data.classe = char.classe.name;
    data.race = char.race.name;
    console.log(data);
    try {
      const response = await api.post("/chars", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <StyledModalCharCreate>
      <section>
        <Form onSubmit={handleSubmit(createChar)}>
          <h3>RACE: {char.race.name}</h3>
          <h3>CLASSE: {char.classe.name}</h3>
          <Input label="Name" register={register("name")} />
          <Button label="CREATE" type="submit" />
        </Form>
      </section>
    </StyledModalCharCreate>
  );
}
