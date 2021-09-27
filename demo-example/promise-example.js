// const doWorkPromise = new Promise((resolve,reject) => {
//     // this function get called by Promise API
 
//     setTimeout(() => {
       
//         // resolve([1,3,7])
//         reject('Things went wrong!');
//         resolve([1,3,7]);
//     },2000)
// }) 

// // .then get called when resolve function get called

// doWorkPromise.then((result) =>  {
 
//     console.log('Success',result);

// })
// .catch((error) => {
//     console.log('Error!' , error);
// })
// // creating promise object from api



// /*                             Fullfilled
//                              /
//  promise -----> pending ---->
//                               \
//                                 rejected
//    // when we create a promise then promise is pending for 2sec before resolve or reject is called
//    // when resolve get called then promise get fullfilled                          
// */




// promise chaining



const add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          resolve(a + b);
        },2000);
    })
}

add(1,2).then((sum) => {
    console.log(sum);


    // another promise call
    add(sum,6).then((sum2) => {
         console.log(sum2);

    }).catch((err) => {
        console.log(err);
    })
}).catch((err) => {
    console.log(err);
})



// by using of promise chaining

add(2,4).then((sum) => {
    console.log(sum);
    return add(sum,10);
}).then((sum2) => {
    console.log(sum2);
}).catch((err) => {
    console.log(err);
})