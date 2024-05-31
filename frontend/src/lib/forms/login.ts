import { z } from "zod"
 
export const loginSchema = z.object({
  user: z.string().min(2).max(50),
  password: z.string().min(2).max(50),
})
