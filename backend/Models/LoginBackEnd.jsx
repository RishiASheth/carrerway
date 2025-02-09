const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    
})

const UserModel = mongoose.model("User",UsersSchema);
module.exports = UserModel;