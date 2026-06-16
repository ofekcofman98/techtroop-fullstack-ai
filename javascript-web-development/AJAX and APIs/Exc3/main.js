const fetch = function(queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            let bookInfo = data.items.forEach(item => {
                const title = item.volumeInfo.title;
                const author = item.volumeInfo.authors[0];
                const bookId = item.id;

                console.log(`Book ${bookId} info: ${title} by ${author}`)
            });
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
};

fetch("title", "How to Win Friends and Influence People");
fetch("title", "The Wise Man's Fears");

/**
 * 
 * {
  "kind": "books#volumes",
  "totalItems": 1,
  "items": [
    {
      "kind": "books#volume",
      "id": "hlb_sM1AN0gC",
      "etag": "y50yvFkIvUk",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/hlb_sM1AN0gC",
      "volumeInfo": {
        "title": "The Hunger Games",
        "authors": [
          "Suzanne Collins"
        ],
       //etc...

 */