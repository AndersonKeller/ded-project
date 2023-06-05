import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { RegisterData, schema } from "./validator";
import { StyledBackground } from "../Login/styles";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export function Register() {
  const { createUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(schema),
  });
  return (
    <StyledBackground>
      <Form onSubmit={handleSubmit(createUser)}>
        <Input label="Username" register={register("user")} />
        {errors.user ? <span>{errors.user.message}</span> : <span></span>}
        <Input label="Email" register={register("email")} />
        {errors.email ? <span>{errors.email.message}</span> : <span></span>}
        <Input
          label="Password"
          register={register("password")}
          type="password"
        />
        {errors.password ? (
          <span>{errors.password.message}</span>
        ) : (
          <span></span>
        )}
        <Button label="Register" type="submit" />
      </Form>
      <p>Already account?</p>
      <Link to={"/login"}>Go to login</Link>
    </StyledBackground>
  );
}
