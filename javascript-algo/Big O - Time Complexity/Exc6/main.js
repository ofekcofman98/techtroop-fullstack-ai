// const findDuplicates = function (ages) {
//     for (let i = 0; i < ages.length; i++) {

//         for (let j = i + 1; j < ages.length; j++) {
//             if (ages[i] === ages[j]) {
//                 console.log(`${ages[i]} has a duplicate`)
//             }
//         }
//         //note that this *entire* inner loop runs for each iteration of i
//     }
// }
// O(n^2)

const findDuplicates = function (ages) {
    const seen = new set();

    for (let age in ages) {
        if (seen.has(age)) {
            console.log(`there is a duplicate`)
        }
        else {
            seen.add(age);
        }
    }
}
// O(n)