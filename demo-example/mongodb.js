//crud operation using mongodb

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient ,ObjectId } = require('mongodb');



const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';



// generate our own id

// const id = new ObjectId();
// console.log(id.id.length);
// console.log(id.toHexString().length)
// console.log(id.getTimestamp());


MongoClient.connect(connectionURL,{ useNewUrlParser: true } ,  (error,client) => {
    // when connect to db then this callback function get called
  
    if(error){
        return console.log('Unable to connect with the database');
        
    }


    const db = client.db(databaseName);
    // db.collection('users').insertOne({
    //     _id:id,
    //     name:'Champuser',
    //     age:22
    // },(error, result) => {
    //     // callback function for connection to handling errors

    //     if(error){
    //         return console.log('Unable to insert User');

    //     }

    //     console.log(result.ops); // ops is array of documents
    // })

    // db.collection('users').insertMany([{
    //     name:'Ujjwal',
    //     age:22
    // },{
    //     name:'champuser',
    //     age:21
    // }], (err,result) => {
    //     if(err){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops);

    // })

    // db.collection('tasks').insertMany([{
    //     description:'node_project',
    //     completed:true
    // },{
    //     description:'react_project',
    //     completed:true
    // },{
    //     description:'microservice_project',
    //     completed:false
    // }] , (err,result) => {
    //     if(err){
    //      return   console.log('Unable to insert Documents!');
    //     }else if(result){
    //         console.log(result.ops);
    //     }

    // })

    // Quering Documents

    // db.collection('users').findOne({_id:new ObjectId("61370c5821ac2269d383911f")} , (error,user) => {
    //     if(error){
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);

    // })

    // // find for search multiple documents


    // db.collection('users').find({age:22}).toArray((error,users) => {
    //     console.log(users);
    // })

    // db.collection('users').find({age:22}).count((error,count) => {
    //     console.log(count);
    // })






    // update Document  using promise


//    const updatePromise =  db.collection('users').updateOne({
//         _id: new ObjectId("61370ac586fccd09a1fa360d")
//     },{
//         $inc:{
//             age:2
            
//         }
//     })

//     updatePromise.then((result) => {
     
//          console.log(result);
//     }).catch((error) => {
//         console.log(error);

//     })





        // Delete  Document using Promise
   
    db.collection('users').deleteMany({
        age:22
    }).then((result) => {
          console.log(result);
    }).catch((error) => {
        console.log(error);
    })


})