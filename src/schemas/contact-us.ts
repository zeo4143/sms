import { z } from "zod"

export const ContactUsSchema = z.object({
    name: z.string().min(3, {
        message: "Name Required"
    }),
    email: z.string().email({
        message: "Email required/Enter a Proper email"
    }),
    message: z.string()
        .min(1, { message: 'Message is required' })
        .refine(
            (value) => value.trim().split(/\s+/).length >= 10,
            { message: 'Message must contain at least 10 words' }
        ),
})

export type ContactUsSchemaFromValues = z.infer<typeof ContactUsSchema>

