const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase();
  capitalizedStr += str.slice(1);
  return capitalizedStr;
}

function getAge(age) {
    if (age < 21) {
        return "Underage";
    }
    else if (age < 55) {
        return age;
    }
    else {
        return "55+";
    }
}

function capitalizeProfession(person) {
    return capitalize(person.profession);
}

function capitalizeCatchphrase(person) {
    return capitalize(person.catchphrase);
}

function capitalizeAddress(person) {
    return `${capitalize(person.city)}, ${capitalize(person.country)}`;
}

const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} `
  summary += capitalizeProfession(person)
  summary += ` from ${capitalizeAddress(person)}.`
  summary += ` ${capitalize(person.name)} loves to say: "${capitalizeCatchphrase(person)}"`
  return summary
}

for (let person of people_info){
    console.log(getSummary(person));
}