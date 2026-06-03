const SongsManager = function() {
    const songs = {};
    const prefix = "https://www.youtube.com/watch?v=";

    const extractIdentifiers = (url) => url.split("v=")[1];

    const addSong = function(name, url) { 
        songs[name] = extractIdentifiers(url);
    }

    const getSong = function(name) {
        if (!songs[name]) {
            return "Song not found."; 
        }

        return prefix + songs[name];
    }

    return {
        addSong: addSong,
        getSong: getSong
    };
}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

console.log(songsManager.getSong("sax")); // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ
