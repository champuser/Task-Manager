require('../src/db/mongooseConnection');
const User = require('../src/models/user');
// update user

User.findByIdAndUpdate('6138686a0b865da8ff62f2fc', {
    age : 20
}).then((user) => {
    console.log(user);
    // check by age of user with this age
    return User.countDocuments({age:0});
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})

const updateAgeAndCount = async (id , age ) => {
     
    const user = await User.findByIdAndUpdate(id,{age:age});
    // get count
    const count = await User.countDocuments({age:age});
    return count;
}

// use async function


updateAgeAndCount('6138686a0b865da8ff62f2fc' , 5).then((result) => {
    console.log('result' , result);
}).catch((err) => {
    console.log(err);
})
