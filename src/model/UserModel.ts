import mongoose from "mongoose";

// _id(ObjectID), __v
const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            min: 3,
            max: 50,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            min: 5,
            max: 25,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            required: true,
            default: "user",                          //frontend bata data ayena vani default ma rakhera pathauni 
        },
        // phone: {
        //   type: String,
        //   required: false,
        //   default: null
        // },
        phone: String,
        image: {
            filename: String,
            path: String,
            type: String,
            size: Number,
            url: String,
            // url: {
            //   type: String,
            //   required: false,
            // }
        },
        address: String,
        createdBy: {
            type: mongoose.Types.ObjectId,                             //tho mongodb is nonrelational but if yeauta table bata arko table ma point garna paryo vani chai  mongoose.Types.ObjectId
            ref: "User",                                               //ref-> reference means kun table ma exists garxa
            required: false,
            default: null,
        },
        updatedBy: {
            type: mongoose.Types.ObjectId,
            ref: "User",
            required: false,
            default: null,
        },
        status: {
            type: String,
            enum: ['active', 'inactive'],
            default: 'active'
        }
        // address: {
        //   province: {
        //     type: String,
        //     enum: ["Koshi", "Madhesh", "Bagmati","Gandaki","Lumbini","Karnali","Sudurpaschim"]
        //   },
        //   district: {
        //     type: String,
        //     enum: ['']
        //   }
        // }
    },
    {
        timestamps: true,                                                //createdAT, updatedAt ko time dekhauxa
        autoCreate: true,                                                //auto create your table
        autoIndex: true                                                 //db ko table lai indexing garxa ra query performance fast hunxa in compare to other
        //
    },
);

// collection(table) => users . Talako User ko plural form i.e users huni vayo table ko name ani small ma pani i.e users                 
const UserModel = mongoose.model("User", UserSchema)
export default UserModel