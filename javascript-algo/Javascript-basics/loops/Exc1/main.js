const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i = 0; i < names.length; i++) {
    people.push({
        name: names[i],
        age: ages[i]
    })
}

console.log(people)

// Exc2 

function ShowAge (name, age) {
    console.log(`${name} is ${age} years old`)
}

for (person of people) {
    ShowAge(person.name, person.age)
}