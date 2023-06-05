import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, schema } from "./validator";
import { StyledBackground } from "./styles";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Form } from "../../components/Form";

export function Login() {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });
  return (
    <StyledBackground>
      <Form onSubmit={handleSubmit(signIn)}>
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
        <Button label="Login" type="submit" />
      </Form>
      <p>Not account?</p>
      <Link to={"/register"}>Go to Register</Link>
    </StyledBackground>
  );
}
