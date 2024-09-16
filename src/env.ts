import z from "zod";

const envSchema = z.object({
    DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)

//arquivo exportado para drizzle.config.ts
//sendo substituido process.env.DATABASE_URL por env.DATABASE_URL
