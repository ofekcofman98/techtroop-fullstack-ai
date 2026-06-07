const calculator = {
    '+': (a,b) => a+b,
    '-': (a,b) => a-b,
    '*': (a,b) => a*b,
    '/': (a,b) => b !== 0 ? a/b : "ZeroError" 
}

const a = Number(process.argv[2]);
const op = process.argv[3];
const b = Number(process.argv[4]);

const result = calculator[op]?.(a, b);

if (result === undefined) {
    console.log("Invalid operation");
} else {
    console.log(result);
}

// node ".\javascript-algo\console app and input\Exc1\main.js" 10 + 5