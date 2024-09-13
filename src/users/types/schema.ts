import { z } from "zod";
import { patterns } from "../../constants";

export const schema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z
    .string()
    .min(1, "Email is required")
    .refine(
      (emailInput) => {
        return patterns.email.test(emailInput);
      },
      { message: "Email is not valid" }
    ),
  states: z.array(z.string()).min(1).max(3),
});

export type FormSchema = z.infer<typeof schema>;

export const defaultValues = {
  name: "",
  email: "",
  states: [],
};
