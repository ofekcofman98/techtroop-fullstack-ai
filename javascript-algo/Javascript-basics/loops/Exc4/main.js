const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

const POST_ID = 2;
const COMMENT_ID = 3;

for (let post of posts) {
    if (post.id === POST_ID) {
        for (let commentIdx in post.comments) {
            if (post.comments[commentIdx].id === COMMENT_ID) {
                post.comments.splice(commentIdx, 1);
                break;
            }
        }
    }
}

console.log(posts);