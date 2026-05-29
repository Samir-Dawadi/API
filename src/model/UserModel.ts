//model -> table

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

    name : {
        type:String,
        unique:true,
        require:true
    }

},

{

    

})

