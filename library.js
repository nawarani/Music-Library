const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
       for (let playlist in library.playlists) {
              let pl = library.playlists[playlist];
              console.log(`${pl.id}: ${pl.name} - ${pl.tracks.length} tracks`);
       }
};

// test
console.log('printPlaylists test');
printPlaylists();
console.log('--------------x--------------')


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
       for (let track in library.tracks) {
              let tr = library.tracks[track];
              console.log(`${tr.id}: ${tr.name} by ${tr.artist} (${tr.album})`);
       }
};
// test
console.log('printTracks test');
printTracks();
console.log('--------------x--------------')


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
       const playlist = library.playlists[playlistId];
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       for (let tr of playlist.tracks) {
              let track = library.tracks[tr];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
};
// test
console.log('printPlaylist test');
printPlaylist('p01');
console.log('--------------x--------------')


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
       library.playlists[playlistId]['tracks'].push(trackId);
};
// test
console.log('addTrackToPlaylist test');
printPlaylist('p01');
addTrackToPlaylist('t03', 'p01');
printPlaylist('p01');
console.log('--------------x--------------')


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
       let newId = generateUid();
       while (library.tracks[newId]) {
              newId = generateUid();
       }
       library.tracks[newId] = {id: newId, name: name, artist: artist, album: album};
};
// test
console.log('addTrack test');
addTrack('Come Play', 'Stray Kids', 'Arcane 2');
printTracks();
console.log('--------------x--------------')



// adds a playlist to the library
const addPlaylist = function(name) {
       let newId = generateUid();
       while (library.playlists[newId]) {
              newId = generateUid();
       }
       library.playlists[newId] = {id: newId, name: name, tracks: []};
};
// test
console.log('addPlaylist test');
addPlaylist('Now');
printPlaylists();
console.log('--------------x--------------')


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
       // const regex = new RegExp(`/${testVar}/i`)
       // const results = [];
       // for (let track in library.tracks) {
       //        for (let val in Object.values(track).slice(1)) {
       //               if (val.search(regex)) {
       //                      results.push(track.name);
       //               }
       //        }
       // }
};