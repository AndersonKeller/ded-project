import { z } from "zod";

export const schema = z.object({
  name: z.string(),
  race: z.string().optional(),
  classe: z.string().optional(),
});
export type CharData = z.infer<typeof schema>;
