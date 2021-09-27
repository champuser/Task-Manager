const express = require('express');
require('./db/mongooseConnection');
const User = require('./models/user');
const Task = require('./models/task');
const UserRouter = require('./routers/user');
const taskRouter = require('./routers/task');


const app = express();
app.use(express.json());  // middleware


const port = process.env.PORT || 8080;

app.use(UserRouter);
app.use(taskRouter);

// port 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});


// add   hashing algorithm
const bcrypt = require('bcryptjs');

const myFuction = async () => {
    const password = "Champ@2658";
    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(password);
    console.log(hashedPassword);

    // given password is matched with the hashed password or not

    const isMatch = await bcrypt.compare('Champ@2658' , hashedPassword);
    console.log(isMatch);
}

myFuction();
// encryption algorithm   champ  --> hbfudkjvndiy78293u9  -> champ
// hashing algoritihm-> one way algorithm    champ --> bvfdbjvdjfvb7y438u389



// // seperate routes

// const router = new express.Router();
// router.get('/test' , (req,res)=> {
//     res.send('This is from my other router');
// });

// // register the router with express application
// app.use(router);



// app.post('/users' , async (req,res) => {
//     //  console.log(req.body); 
//     // res.send('testing post method');

// // create new user
// const user = new User(req.body);

// // handle individual promise error using try catch block
// try{
//     await user.save();
//     res.status(201).send(user);


// }catch(err){
//     res.status(400).send(err);

// }


// // user.save().then(()=> {
// //     res.status(201).send(user);

// // }).catch((err)=> {
// //     // set status cose

// //     res.status(400).send(err);

// //     // res.send(err);

// // });

// // reading end points

// app.get('/users',async (req,res) => {
//     // find users
//     try{
//         const users = await User.find({});
//         res.send(users);
 
//     }catch(err){
//         res.status(500).send();



//     }



//     // User.find({}).then((users) => {
//     //     res.send(users); // send array of users
//     // }).catch((err) => {
//     //     // 500 --> internal error when db get disconnected
//     //     res.status(500).send(err);

//     // })
// })


// // req to endPoint using id

// app.get('/users/:id' , async (req,res) => {
//     // fetch the user is any and send back
//     const _id  =  req.params.id;

// try{
//     const user = await User.findById(_id);
//     if(!user){
//         return res.status(404).send();

//     }
//     res.send(user);

// }catch(err) {
//     res.status(500).send();

// }
    
//     // // use findOne
//     // User.findById(_id).then((user) => {
//     //      // if no user find by that then mongodb will not give us error
//     //      if(!user) {
//     //          return res.status(404).send();
//     //      }
   
//     //      res.send(user);

//     // }).catch((err) => {
//     //      res.status(500).send(err);
//     // })
// })
// // set task end point

// app.post('/tasks',async (req,res) => {

//     //create newtask
//     const task = new Task(req.body);

// //     task.save().then(()=> {
// //         res.send(task);
// //     }).catch((err) => {
// //         res.status(400).send(err);
// //     })


// try{
//     await task.save();
//     res.send(task);

// }catch(err){
//     res.status(400).send(err);

// }
// })



// // task reading end points

// app.get('/tasks' , async (req,res) => {
    
//     try{
//         const task = await Task.find({});
//         res.send(task);

//     }catch(err){
//         res.status(500).send(err);
//     }
//     // Task.find({}).then((tasks) => {
//     //     res.send(tasks);
//     // }).catch((err) => {
//     //     res.status(500).send(err);
//     // })
// })


// app.get('/tasks/:id' , async (req,res) => {
//     const _id = req.params.id;

//     try{
//      const task =   await Task.findById(_id);
//         if(!task){
//             return res.status(404).send();

//         }
//         res.send(task);



//     }catch(err){
//         res.status(500).send(err);

//     } 

//     // Task.findById(_id).then((task) => {
//     //     if(!task) {
//     //         return res.status(404).send();
//     //     }

//     //     res.send(task);
//     // }).catch((err) => {
//     //     return res.status(500).send();

//     // })
// })


// // update -----> patch

// app.patch('/users/:id' , async(req,res) => {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['name','email','password','age'];
     
//     const isValidOperation = updates.every((update) => {
//         return allowedUpdates.includes(update);

//     })
//     if(!isValidOperation){
//         return res.status(400).send({error : 'Invalid updates!'})
//     }
//     try{

//         const user = await User.findByIdAndUpdate(req.params.id , req.body, {new: true , runValidators: true});
//         if(!user){
//             return res.status(404).send();
//         }
//         res.send(user);




//     }catch(err) {
//         // handling validation error
//         res.status(400).send(err);

//     }
// })



// // set up route handler for task updates

// app.patch('/tasks/:id' , async(req,res) => {
//     const updates = Object.keys(req.body);
//     const allowedUpdates = ['description' , 'completed'];

//     const isValidOperation = updates.every((update) => {
//         allowedUpdates.includes(update)
//     })

//     if(!isValidOperation) {
//         return res.status(400).send({error: 'Invalid updates!'});
//     }

//     try{
//         const task = await Task.findByIdAndUpdate(req.params.id , req.body , {new: true, runValidators: true});
//         if(!task ){
//             return res.status(404).send();
//         }
//         res.send(task);

//     }catch(err){
//         res.status(400).send(err);

//     }

// } )

// // delete method
// // setting http end point

// app.delete('/users/:id', async(req,res)=> {
//     try{
//         const user = await User.findByIdAndDelete(req.params.id );
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user);

//     }catch(err){
//         res.status(500).send();

//     }
// })



