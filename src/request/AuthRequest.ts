import z from "zod"

export const loginDTO = z.object({
    username: z.string().nonempty().nonoptional(),
    password: z.string().nonempty().nonoptional()
})

export const RegisterDTO = z.object({
    name:z.string().min(3).max(50).regex(/^[a-zA-Z]$/),
    email:z.email().nonempty().nonoptional(),
    username:z.string().min(5).max(25),
    // password:z.string().min(5).max(25).regex(/^$/),
    password:z.string().regex(/^(?=.=[a-z])()$/),
    confirmPassword:z.string().nonempty(),
    phone:z.string().nonempty()
})

.refine((val)=> val.password === val.confirmPassword,{
    message:"Password and confirmpassword doesnot match",
    path : ["confirmPassword"]
})