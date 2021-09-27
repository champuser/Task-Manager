const mongoose =  require('mongoose');
const valiadator = require('validator');



const TaskSchema = mongoose.model('Task',{
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

module.exports = TaskSchema;
