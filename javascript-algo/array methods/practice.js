// const sentence = "Hi, my name is ofek!";
// const specialChars = [",", ".", "'", '"', "?", "!", ";"]

// function cleanText(str) {
//     str = str.toLowerCase();

//     for (let c of specialChars) {
//         str = str.split(c).join("");
//     }

//     return str;
// }

// let cleaned = cleanText(sentence).split(" ");

// // loop:
// let count1 = {};

// for (let word of cleaned) {
//     count1[word] = (count1[word] || 0) + 1;
// }

// // reduce: 
// const count2 = cleaned.reduce((count, word) => {
//     count[word] = (count[word] || 0) + 1;
//     return count;
// }, {})

// 

function add(a) {
    return function(b) {
        return a+b;
    }
}

console.log(add(5)(2));
console.log(add(19)(2));


