const Exercises = require('./main')

test("isEven should return true if n is even, false otherwise", function () {

    const exercises = new Exercises()
    
    expect(exercises.isEven(4)).toBeTruthy();
    expect(exercises.isEven(0)).toBeTruthy();
    expect(exercises.isEven(3)).toBeFalsy();
    expect(exercises.isEven(-1)).toBeFalsy();

    expect(exercises.isEven()).toBeFalsy();
    expect(exercises.isEven(undefined)).toBeFalsy();
    expect(exercises.isEven("hello")).toBeFalsy();
})

test("removeAtLeastOne should remove at least one element from the array `arr`", function() {
    const exercises = new Exercises();

    const arr = [1,2,3,4,5]
    const originalLength = arr.length;

    const resultArr = exercises.removeAtLeastOne(arr);

    expect(resultArr.length).toBeLessThan(originalLength);

    expect(exercises.removeAtLeastOne([])).toEqual([]);
    expect(exercises.removeAtLeastOne(null)).toEqual([]);
    expect(exercises.removeAtLeastOne(100)).toEqual([]);
})

test(`simplify should return a clean string without these symbols: "!", "#", ".", ",", "'"`, function() {
    const exercises = new Exercises();

    const str = `Ofek!Cofman#Ofek.Cofman,'Ofek'`
    expect(exercises.simplify(str)).toBe("OfekCofmanOfekCofmanOfek");

    expect(exercises.simplify(null)).toBe("");
    expect(exercises.simplify()).toBe("");
    expect(exercises.simplify(123)).toBe("123");
})

test("validate method - TDD exercise", function() {
    const exercises = new Exercises();

    expect(exercises.validate([])).toEqual({ error: "Need at least one boolean" });
    expect(exercises.validate(["hello", 5])).toEqual({ error: "Need at least one boolean" });

    expect(exercises.validate([true, true, false])).toBeTruthy();

    expect(exercises.validate([true, false, false])).toBeFalsy();
    expect(exercises.validate([true, false])).toBeFalsy();
    
    expect(exercises.validate(null)).toEqual({ error: "Need at least one boolean" });
    expect(exercises.validate(123)).toEqual({ error: "Need at least one boolean" });
    expect(exercises.validate("hello")).toEqual({ error: "Need at least one boolean" });
});