const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

/*
output: nothing. The program is crashing cause found is not defined.

error: yes. found is not defined in every run.

undefined: nothing. If found was var then it was undefined. 

userExists: global scope
users: local scope of doesUserExist
name: local scope of doesUserExist
found: local scope of if-block in for-block in doesUserExist.
*/