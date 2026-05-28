import multer from "multer"
import type { Request } from "express"
import path from "node:path"
import fs from "fs"

const uploader = (dir: string = '/') => {
    //storage configuration
    const myStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            try {
                const __dirname = process.cwd();                                             //path of file upto API                                
                console.log(__dirname)
                const filePath = path.join(__dirname, `/public/uploads${dir}`)              //ka nira rakhni file
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath, { recursive: true })
                }
                cb(null, filePath)
            } catch (exception) {
                console.log(new Error("Storage cannot be configured"))
            }
        },
        filename: (req, file, cb) => {
            const ext = file.originalname.split(".").pop()
            const fileNamePrefix = dir !== '/' ? "Uploads" + dir.replace('/', '-') + "-" : 'Uploads';
            const fileName = `${fileNamePrefix}${Date.now()}.${ext}`

            cb(null, fileName)
        }
    })

    //file validation config
    const fileFilter = (req: Request, file: Express.Multer.File, cb: (obj: Error | null, arg?: boolean) => void) => {
        const ext = file.originalname.split(".").pop() as string;
        const allowedExts = ['jpg', 'png']

        if (allowedExts.includes(ext.toLowerCase())) {
            cb(null, true)
        }
        else {
            cb(new Error("File format not supported"))
        }
    }

    return multer({
        storage: myStorage,                                                         //where do i want to store my
        fileFilter: fileFilter,                                                      //kasto khalko file haru upload garxu vanni kurako validation , file kaile pani req.body bata garna mildaina so hami yeha bata validate garxam
        limits: {                                                                       //file ko size validation
            fileSize: 7 * 1024 * 1024
        }
    })
}

export default uploader