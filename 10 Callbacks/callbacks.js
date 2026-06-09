// Callbacks are functions used as arguments into another functions.
const sum = (a,b)=> {
    return a+b
}
const printSum=(a,b,sumFunction)=>{
    console.log(sumFunction(a,b))
}
printSum(2,3,sum) 