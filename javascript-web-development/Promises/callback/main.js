function oldAsyncFunction(callback) {
setTimeout(() => {
        if (Math.random() > 0.5) {
            callback(null, "Success");
        } else {
            callback(new Error("Failed"));
        }
    }, 1000);
}

function wrappedAsyncFunction() {
    return new Promise((resolve, reject) => {
            oldAsyncFunction((error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}