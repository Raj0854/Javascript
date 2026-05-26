//Q.1 Create a function using the function keyword that takes string as an argument and returns the number of vowels in the string
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
// using arrow function
const countVowel = (str) => {
    let count=0;
    const vowels= "aeiouAEIOU";
    for(let char of str){if (vowels.includes(char)){count++;
    }}
    return count;
}

// Q.2  For a given arrays of numbers print the square of each value using the four each loop
nums=[1,2,3,4,5,6,7,8,9]
nums.forEach((val)=>{console.log(val*val)
    
});


// Q.3 // we are given array marks of student filter out of student that is scored 90 +
let marks =[78, 85, 92, 88, 95, 80, 91, 89]
let toppers= marks.filter((val)=>{return val>90})





//Q.4 Take a number  as n input from user create an array of number from one to N use the reduce matter to calculate some of the all numbers in the area and use reduce matter to calculate product of all numbers in the array
let n= parseInt(prompt("Enter a number:"));
let arr= Array.from({length:n}, (_,i)=>i+1);