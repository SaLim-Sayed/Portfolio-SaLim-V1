import { z } from "zod";

export default function useSchema() {
  const validator = z.object({
    name: z.string().min(3),
    email: z
      .string()
      .email( )
      .min(5),
    message: z.string().min(4),
  });

  return validator;
}
