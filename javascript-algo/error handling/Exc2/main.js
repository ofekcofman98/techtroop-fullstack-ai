import fs from "fs";

function readFileWithErrorHandling(path, callback) {

    fs.readFile(path, (err, data) => {
        if (err) {

            if (err.code === 'ENOENT') {
                return callback(`File not found: "${path}"`);
            }
            if (err.code === 'EISDIR') {
                return callback(`Error: "${path}" is a directory, not a file`);
            }

            return callback(`An unknown error occurred: ${err.message}`);
        }

        const fileSize = data.length;
        callback(`File "${path}" read successfully. Size: ${fileSize} bytes`);
    });
}

readFileWithErrorHandling('missing_file.txt', (result) => {
    console.log(result); 
});

readFileWithErrorHandling('.', (result) => {
    console.log(result); 
});

readFileWithErrorHandling('./javascript-algo/error handling/Exc1/main.js', (result) => {
    console.log(result); 
});