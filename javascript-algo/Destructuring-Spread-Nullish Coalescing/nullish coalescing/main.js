let employeesArr = [
  { name : "Joey" , id: 1 , age: 26},
  { name : "Lily" , id: null , age: 24},
  { name : "Alice" , id: 7 , age: null},
  { name : "Sam" , id: 8 , age: 24},
  { name : "Ray" , id: null , age: null}
  ]

const MISSING = "missing";

employeesArr.forEach(emp => {
    const id = emp.id ?? MISSING;
    const age = emp.age ?? MISSING;

    if (id === MISSING || age === MISSING) {
        console.log(emp.name);
    }
});