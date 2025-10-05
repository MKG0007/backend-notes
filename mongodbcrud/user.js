
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongopep');

const userSchema = mongoose.Schema({
    image: String,
    email: String,
    name: String
})

module.exports = mongoose.mongoose.model('allusers' , userSchema);
