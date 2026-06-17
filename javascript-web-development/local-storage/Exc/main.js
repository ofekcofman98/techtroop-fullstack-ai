const input = document.getElementById('wisdom-input');
const addButton = document.getElementById('add-button');
const clearButton = document.getElementById('clear-button');
const container = document.getElementById('wisdom-container');

let wisdom = JSON.parse(localStorage.getItem('wisdom') || "[]");

function renderWisdom() {
    container.innerHTML = "";

    wisdom.forEach((item) => {
        const div = document.createElement('div');
        div.className = "wisdom-item";

        div.innerHTML = `
            <span>${item.text}</span>
            <button class="delete-item-button" data-id="${item.id}">X</button> 
        `;

        container.appendChild(div);
    });
}

addButton.addEventListener('click', function() {
    const textValue = input.value;
    if (textValue === "") return;

    const newWisdom = {
        id: Date.now(),
        text: textValue
    }

    wisdom.push(newWisdom);
    console.log(`Added "${textValue}"!`);

    renderWisdom();

    if (wisdom.length % 2 === 0) {
        localStorage.setItem('wisdom', JSON.stringify(wisdom));
        console.log("saved in local storage");
    }

    input.value = "";
});

clearButton.addEventListener('click', function() {
    localStorage.removeItem('wisdom');
    wisdom = [];

    console.log(`Cleared wisdom`);
    renderWisdom();
})

container.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-item-button')) {
        const idToDelete = Number(event.target.getAttribute('data-id'));
        wisdom = wisdom.filter(item => item.id !== idToDelete);

        localStorage.setItem('wisdom', JSON.stringify(wisdom));

        console.log(`Removed item`);
        renderWisdom();
    }
})

renderWisdom();