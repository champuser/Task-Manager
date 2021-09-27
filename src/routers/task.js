const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

// set task end point

router.post('/tasks',async (req,res) => {

    //create newtask
    const task = new Task(req.body);

try{
    await task.save();
    res.send(task);

}catch(err){
    res.status(400).send(err);

}
})



// task reading end points

router.get('/tasks' , async (req,res) => {
    
    try{
        const task = await Task.find({});
        res.send(task);

    }catch(err){
        res.status(500).send(err);
    }
  
});


// get request using id

router.get('/tasks/:id' , async (req,res) => {
    const _id = req.params.id;

    try{
     const task =   await Task.findById(_id);
        if(!task){
            return res.status(404).send();
        }
        res.send(task);
    }catch(err){
        res.status(500).send(err);

    } 
});


// set up route handler for task updates

router.patch('/tasks/:id' , async(req,res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description' , 'completed'];

    const isValidOperation = updates.every((update) => {
        allowedUpdates.includes(update)
    })

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid updates!'});
    }

    try{
        const task = await Task.findByIdAndUpdate(req.params.id , req.body , {new: true, runValidators: true});
        if(!task ){
            return res.status(404).send();
        }
        res.send(task);

    }catch(err){
        res.status(400).send(err);

    }

} )



module.exports = router;
