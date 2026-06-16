const fetch = function(isbn) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (data) {
            let bookTitle = data.items[0].volumeInfo.title;
            console.log(bookTitle);
        },
        error: function (xhr, text, error) {
            console.log(text);
        }
    });
};

fetch(9782806269171); // The Little Prince: Book Analysis
fetch(1440633908); // Of Mice and Men by John Steinbeck
fetch(9781945048470); // The Alchemist by Paulo Coelho
fetch(9780307417138); // Hitchhiker's Guide to the Galaxy

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