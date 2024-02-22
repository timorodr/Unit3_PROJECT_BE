const mongoose = require('./connection') // configuring to our connection mongoose 

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

const User = mongoose.model("User", UserSchema)

module.exports = User