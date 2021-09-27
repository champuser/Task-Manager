const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api' ,{
    useNewUrlParser: true,
    
    
 

   
})

// define a model

const User = mongoose.model('User', {
    name:{
        type:String,
        required: true,
        trim:true

    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid');
            }

        }
       
    },
    password: {
      type:String,
      required:true,
      minlength:7,
      trim:true,
      validate( value){
          if(value.toLowerCase().includes('password')){
              throw new Error('Password can not contain "password"');

          }
      }

    },
    age:{
        type: Number,
        default:0,
        // set custom valiadator
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive Number');
            }
        }

    }

})

// create instance of model so that add documents to the database

const me = new User({
    name:'    Ujjwal   ',
    email:'    CCCCChamp@example.com   ',
    password: '        Phone@12345    '
});


// methods of instance to save the data to the documents

me.save().then((result) => {
     console.log(me);
}).catch((error) => {
    console.log('Error!',error);
})


// creating a new model


const Task = mongoose.model('Task',{
    description : {
        type: String,
        required:true,
        trim:true,

    },
    completed:{
        type: Boolean,
        default:false
    }
});

// creating instance of new model

const task = new Task({
    description:'completing node_project',
    completed: true

});

task.save().then((result) => {
    console.log(task);

}).catch((error) => {
    console.log('Error!' ,error);
})


