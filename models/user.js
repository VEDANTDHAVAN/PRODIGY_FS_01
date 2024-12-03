const mongoose = require('mongoose')
const {Schema} = mongoose;
const userScheme= new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    confpassword: String
})

const userModel = mongoose.model('User', userScheme);

module.exports = userModel;