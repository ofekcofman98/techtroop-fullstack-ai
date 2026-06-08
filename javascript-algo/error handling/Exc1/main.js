const safeJsonParse = function(str) {
    try {
        return JSON.parse(str);
    }
    catch (error) {
        return "Invalid JSON format";
    }
}

console.log(safeJsonParse('{"name": "John"}'));
console.log(safeJsonParse('invalid json'));