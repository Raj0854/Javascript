//Q.1 for a given array with marks of students => [85,97,44,37,76,60]. find the average marks of the entire class.
 
let marks=[85,97,44,37,76,60]
let sum=0
for (let mark of marks){
    sum+=mark
}
console.log("the average marks of class is ", sum/marks.length)



// Q.2 for a given array with prices of 5 items =>[250,645,300,900,50] All items have an offer of 10% off on them.change the array to store final price after applying offer.

let items=[250,645,300,900,50]
for (let i =0;i<items.length;i++){
    let discount=items[i]/10;
    items[i]-=discount
}
    console.log(items)


// Q.3 create an array to store the company names => ["Google","Facebook","Amazon","Microsoft","Apple"]. 
// a. add "Tesla" at the end of the array
// b. remove the first element of the array 
// c. remove "Amazon" from the array and add "Adobe" in place of it
// d. find the index of "Microsoft" in the array

let companies=["Google","Facebook","Amazon","Microsoft","Apple"]
// a. add "Tesla" at the end of the array
companies.push("Tesla")
// b. remove the first element of the array
companies.shift()
// c. remove "Amazon" from the array and add "Adobe" in place of it
companies.splice(2,1,"Adobe")
// d. find the index of "Microsoft" in the array
console.log("the index of Microsoft is ", companies.indexOf("Microsoft")) 