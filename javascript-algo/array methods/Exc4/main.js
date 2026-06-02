import { users } from "../users.js";

let arr = users
            .filter(user => user.name.charAt(0).toLowerCase() === "c")
            .map(user => user.name);

console.log(arr);