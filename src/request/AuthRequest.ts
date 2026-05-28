import z from "zod"

export const loginDTO = z.object({
    username: z.string().nonempty().nonoptional(),
    password: z.string().nonempty().nonoptional()
})

export const RegisterDTO = z.object({
    name: z.string().min(3).max(50).regex(/^[a-zA-Z]$/),
    email: z.email().nonempty().nonoptional(),
    username: z.string().min(5).max(25),
    // password:z.string().min(5).max(25).regex(/^$/),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8}$/, "Password must be strong"),
    confirmPassword: z.string().nonempty(),
    phone: z.string().nonempty()
})
    //password ra confirm password check garni
    .refine((val) => val.password === val.confirmPassword, {              // refine ma call back func auca jasko val ma chai postman ma jj data pathauxau tyo sab auxa yedi duitai password ra confirm password same vayo vani pass hunxa ntra comma paxi chai error dekhauxa 
        message: "Password and confirmpassword doesnot match",
        path: ["confirmPassword"]                                       // confirmpassword field ma mathi line ko message pathauni
    })