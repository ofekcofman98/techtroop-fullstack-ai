import { users } from "../users.js";

let arr = users
            .filter(user => user.address.zipcode.charAt(0) === "5")
            .map(user => user.id);

console.log(arr);