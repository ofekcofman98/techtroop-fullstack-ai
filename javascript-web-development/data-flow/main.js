const posts = [
    {
        name:"Ofek",
        text:"My name is Ofek"
    },
]

const render = function() {
    $("#posts-container").empty();

    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];

        let postBox = $(`
            <div class="post" data-index="${i}">
                <h3> ${post.name}:</h3>
                <p> ${post.text}</p> 
            </div>
        `);

        $("#posts-container").append(postBox);
    }
}

render();

$("button").on("click", function () {
    const nameValue = $("#name-input").val();
    const textValue = $("#text-input").val();

    posts.push({
        name: nameValue,
        text: textValue
    });

    render();

    $("#name-input").val("");
    $("#text-input").val("");   
});

$("#posts-container").on("click", ".post", function() {
    const postIndex = $(this).data("index");

    posts.splice(postIndex, 1);

    render();
});