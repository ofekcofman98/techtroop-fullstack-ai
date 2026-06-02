import { users } from "../users.js";

let arr = users.map(user => ({
    email: user.email,
    companyName: user.company.name
}));

console.log(arr);
