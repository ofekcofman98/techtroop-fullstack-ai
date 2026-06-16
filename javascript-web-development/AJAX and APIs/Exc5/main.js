const fetchGif = function(gifQuery) {
    const ApiKey = "jifY5z05sygbR1UQHinK9pJePjn32P3R";
    
    $.ajax({
        method: "GET",
        url: `https://api.giphy.com/v1/gifs/search?api_key=${ApiKey}&q=${gifQuery}`,
        success: function (response) {
            const firstGifUrl = response.data[0].embed_url;
            
            $("#gif-container").attr("src", firstGifUrl);
        },
        error: function (xhr, text, error) {
            console.log("Something went wrong:", text);
        }
    });
};

$("#search-btn").on("click", function() {
    const query = $("#search-input").val();
    
    fetchGif(query);
});