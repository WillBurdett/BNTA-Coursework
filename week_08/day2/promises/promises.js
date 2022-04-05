// setTimeout(() => {
//     return "Hello world"}, 
//     2000);

// const output = resolveAfter2Seconds();
// console.log(output)

// setTimeout(() => {
//     return console.log(output)}, 
//     3000);


// const resolveAfter2Seconds = () => {
//     // promise must take resolve, can take reject
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("hello world")
//         }, 2000);
//     });
// }
// async must always go befor efunction declaration
// const asyncFunction = async () => {
//     console.log("calling asyncFunction");
//     const result = await resolveAfter2Seconds();
//     console.log(result);
// }
// asyncFunction();

const doComplexCalculation = (input) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (input < 10){
                resolve(input*2);
            } else {
                reject("I can't handle numbers that big!");
            }
        }, 2000);
    })
}
const asyncCalculator = async (input) =>{
    try {
        const result = await doComplexCalculation(input)
        console.log(result);
    } catch (error){
        console.error(error);
    } // could add 'finally' block here for when connecting to DB as you want to close connection afterwards
}

asyncCalculator(11);