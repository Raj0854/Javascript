// Create a function using the function keyword that takes string as an argument and returns the number of vowels in the string
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

const countVowel = (str) => {
    let count=0;
    const vowels= "aeiouAEIOU";
    for(let char of str){if (vowels.includes(char)){count++;
    }}
    return count;
}