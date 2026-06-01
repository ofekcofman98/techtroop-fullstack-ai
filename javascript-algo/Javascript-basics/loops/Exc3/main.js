const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]
const ID_TO_REMOVE = 2;

for (let post of posts) {
    if (posts[i].id === ID_TO_REMOVE) {
        posts.splice(i, 1);
        break;
    }
}

console.log(posts);