import * as z from "zod";
//Zod is a TypeScript-first schema declaration and validation library. It allows you to define the shapes of your data, validate incoming data against these shapes, and provides TypeScript types for improved development experience.
export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
});
