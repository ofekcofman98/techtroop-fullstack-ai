// https://official-joke-api.appspot.com/random_joke
/** {
 *      "type":"general",
 *      "setup":"Why couldn't the lifeguard save the hippie?",
 *      "punchline":"He was too far out, man.",
 *      "id":311
 * }*/

function getRandomJoke() {
    return fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json());
}
function displayJoke() {
    const setupEl = document.getElementById('setup');
    const punchlineEl = document.getElementById('punchline');
    const btn = document.getElementById('new-joke-button');
    
    setupEl.innerText = "Loading...";
    punchlineEl.innerText = "";
    btn.disabled = true;

getRandomJoke()
        .then((body) => {
            setupEl.innerText = body.setup;
            punchlineEl.innerText = body.punchline;
        })
        .catch((error) => {
            setupEl.innerText = "Failed to load joke.";
            console.error(error);
        })
        .finally(() => {
            btn.disabled = false;
        });
}

displayJoke();

document.getElementById('new-joke-button').addEventListener('click', displayJoke);