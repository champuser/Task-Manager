require('../src/db/mongooseConnection');
const Task = require('../src/models/task');

// Remove a given task by id
// and get & print the total number of incomplete task

// Task.findByIdAndDelete('6138718ebd453c844ffb9007' ).then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed : false});
// }).then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// })


// challenge

const deleteTaskAndCount =  async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await  Task.countDocuments({completed: false});
    return count;



}


deleteTaskAndCount('613874bca0f1a57dda04d263').then((count) => {
    console.log(count);
}).catch((err) => {
    console.log(err);
})




