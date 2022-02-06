const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// const User = mongoose.model('User',{})
// to use some middleware of mongoose to secure password using bcrypt we use mongoose Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw Error('Email is inValid! please enter a valid email.');
            }

        }
    },
    password: {
        type: String,
        required: true,
        minlength:7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password can not contain "password"');

            }
        }


    },
    age: {
        type:Number,
        default:0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number');
            }
        }
    }
})

// set middleware
// methods for doing an events
// we have to bind this and we know arrow function dont bind
userSchema.pre('save', async function(next) {
   // it has acces of all user before save 
const user = this;

console.log('just before saving!');


// hash the password
// if the password is already hashed then not apply 
// and the possword modified then hashed the passwkord

if(user.isModified('password')){
    user.password = await bcrypt.hash(user.password,8);
}


next();   // next get called for end if we not call next then consider still some code running before save and also it never save the user


})
// define a model

const User = mongoose.model('User', userSchema);


module.exports = User;