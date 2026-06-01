let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

const MIN_USERNAME_LENGTH = 5; 
const MIN_PASSWORD_LENGTH = 8;
const MIN_AGE = 13;

if (!(usernameLength >= MIN_USERNAME_LENGTH)) {
    console.log(`username must be at least ${MIN_USERNAME_LENGTH} characters`)
}
if (!(passwordLength >= MIN_PASSWORD_LENGTH)) {
    console.log(`password must be at least ${MIN_PASSWORD_LENGTH} characters`)
}
if (!(userAge >= MIN_AGE)) {
    console.log(`you must be at least ${MIN_AGE} years old`)
}

if (
    usernameLength >= MIN_USERNAME_LENGTH &&
    passwordLength >= MIN_PASSWORD_LENGTH &&
    userAge >= MIN_AGE
) {
    console.log("Account created successfully");
}