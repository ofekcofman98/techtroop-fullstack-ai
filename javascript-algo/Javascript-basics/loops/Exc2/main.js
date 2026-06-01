people = [{name: "Ashley", age: 23},
  {name: "Donovan", age: 47},
  {name: "Lucas", age: 18}
]

function ShowAge (name, age) {
    console.log(`${name} is ${age} years old`)
}

for (person of people) {
    ShowAge(person.name, person.age)
}