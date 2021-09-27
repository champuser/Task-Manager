// sum example

const add = (a,b) => {

    return new Promise((resolve ,reject) => {
        setTimeout(() => {
            if(a < 0 || b < 0){
                return reject('Numbers must be a positive integer');
            }
            resolve( a + b);
        },2000)
    })
}

const doWork = async () => {
    //  throw new Error('Oops! something went wrong!');
    // return 'Ujjwal';
 
    // access of this promise on .then method below
    const sum = await add(2,198);
    // return sum;

    const sum2 = await add(sum,50);
    const sum3 = await add(sum2,-50);
    return sum3;
}
// console.log(doWork());

// use promise method then and catch

doWork().then((result) => {
    console.log('result' ,result);
}).catch((e) => {

    // this block will run when doWork async fuction throw an error
    console.log('error' , e);
})