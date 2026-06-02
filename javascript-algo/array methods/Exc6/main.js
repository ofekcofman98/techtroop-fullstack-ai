import { users } from "../users.js";

const targetUser = users.find(user => user.address.suite === "Apt. 950");

if (targetUser) {
    console.log(targetUser.company.name);
}