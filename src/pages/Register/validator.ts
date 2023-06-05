import { z } from "zod";

export const schema = z.object({
  user: z.string().min(3).max(52),
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export type RegisterData = z.infer<typeof schema>;
