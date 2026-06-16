const fetch = function(queryType, queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (data) {
            let bookInfo = data.items[0].volumeInfo;
            console.log(`${bookInfo.title}`);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
};

fetch("isbn", 9789814561778); // From Third World to First: The Singapore Story

fetch("title", "How to Win Friends and Influence People"); // book by Dale Carnegie
fetch("title", "The Wise Man's Fears"); // The Wise Man's Fears

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