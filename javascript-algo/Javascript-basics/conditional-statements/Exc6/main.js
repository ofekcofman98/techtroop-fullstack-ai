let year = 2024;
// Your conditional code here
// Examples: 2024 = leap, 1900 = not leap, 2000 = leap, 2023 = not leap
const YES = "Leap year";
const NO = "Not leap year";

if (year%4 === 0) {
    if (year%100 === 0) {
        if (year%400 === 0) {
            console.log(YES);
        }
        else {
            console.log(NO)
        }
    }
    else {
        console.log(YES)
    }
}
else {
    console.log(NO);
}