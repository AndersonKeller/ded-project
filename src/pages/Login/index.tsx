import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, schema } from "./validator";

export function Login() {
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });
  return (
    <form onSubmit={handleSubmit(signIn)}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register("email")} />

      <label htmlFor="password">Senha</label>
      <input type="password" id="password" {...register("password")} />

      <button type="submit">Entrar</button>
    </form>
  );
}
