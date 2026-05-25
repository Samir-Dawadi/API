import z from "zod"

export const loginDTO = z.object({
    username: z.string().nonempty().nonoptional(),
    password: z.string().nonempty().nonoptional()
})

export const RegisterDTO = z.object({
    username:z.string().nonempty().nonoptional(),
    password:z.string().nonempty().nonoptional(),
    email:z.email().nonempty().nonoptional()
})