const express = require('express');
const User = require('../models/user');
const router = new express.Router();

router.post('/users' , async (req,res) => {
// create new user
const user = new User(req.body);

// handle individual promise error using try catch block
try{
    await user.save();
    res.status(201).send(user);


}catch(err){
    res.status(400).send(err);

}

});
// reading end points

router.get('/users',async (req,res) => {
    // find users
    try{
        const users = await User.find({});
        res.send(users);
 
    }catch(err){
        res.status(500).send();



    }
});


// req to endPoint using id

router.get('/users/:id' , async (req,res) => {
    // fetch the user is any and send back
    const _id  =  req.params.id;

try{
    const user = await User.findById(_id);
    if(!user){
        return res.status(404).send();

    }
    res.send(user);

}catch(err) {
    res.status(500).send();

}
    
});


// update -----> patch

router.patch('/users/:id' , async(req,res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name','email','password','age'];
     
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);

    })
    if(!isValidOperation){
        return res.status(400).send({error : 'Invalid updates!'})
    }
    try{

        const user = await User.findById(req.params.id);

        // user.name = 'Something Else';

        updates.forEach((update)=> {
            user[update] = req.body[update];
        });

        await user.save();

        // const user = await User.findByIdAndUpdate(req.params.id , req.body, {new: true , runValidators: true});   // this line bypass the mongoose middleware so we use trakditional way
        if(!user){
            return res.status(404).send();
        }
        res.send(user);




    }catch(err) {
        // handling validation error
        res.status(400).send(err);

    }
})


// delete method
// setting http end point

router.delete('/users/:id', async(req,res)=> {
    try{
        const user = await User.findByIdAndDelete(req.params.id );
        if(!user){
            return res.status(404).send()
        }
        res.send(user);

    }catch(err){
        res.status(500).send();

    }
});



module.exports = router;