// Array of song objects
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Rock" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
];

// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
    return Object.keys(guardians).map(guardian => {
        const preferredGenre = guardians[guardian];
        const playlist = songs.filter(song => song.genre === preferredGenre);
        return { guardian, playlist };
    });
}

// Call generatePlaylist and display the playlists for each Guardian
const playlists = generatePlaylist(guardians, songs);
const container = document.getElementById('playlists');

playlists.forEach(({ guardian, playlist }) => {
    const playlistDiv = document.createElement('div');
    playlistDiv.className = 'playlist';

    const title = document.createElement('h2');
    title.textContent = `${guardian}'s Playlist`;
    playlistDiv.appendChild(title);

    playlist.forEach(song => {
        const songElement = document.createElement('div');
        songElement.className = 'song';

        const songTitle = document.createElement('span');
        songTitle.className = 'song-title';
        songTitle.textContent = song.title;

        const artistName = document.createElement('span');
        artistName.className = 'artist-name';
        artistName.textContent = ` by ${song.artist}`;

        songElement.appendChild(songTitle);
        songElement.appendChild(artistName);

        playlistDiv.appendChild(songElement);
    });

    container.appendChild(playlistDiv);
});
