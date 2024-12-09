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
             },
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  printPlaylists: function() {
              for (let playlist in this.playlists) {
                     let pl = this.playlists[playlist];
                     console.log(`${pl.id}: ${pl.name} - ${pl.tracks.length} tracks`);
              }
       },
  // prints a list of all tracks, using the following format:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  printTracks: function() {
       for (let track in this.tracks) {
              let tr = this.tracks[track];
              console.log(`${tr.id}: ${tr.name} by ${tr.artist} (${tr.album})`);
       }
  },
  // prints a list of tracks for a given playlist, using the   following format:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  printPlaylist: function(playlistId) {
       const playlist = this.playlists[playlistId];
       console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       for (let tr of playlist.tracks) {
              let track = this.tracks[tr];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
  },
  // adds an existing track to an existing playlist
  addTrackToPlaylist: function(trackId, playlistId) {
       this.playlists[playlistId]['tracks'].push(trackId);
  },
  // adds a track to the library
  addTrack: function(name, artist, album) {
       let newId = generateUid();
       while (this.tracks[newId]) {
              newId = generateUid();
       }
       this.tracks[newId] = {id: newId, name: name, artist: artist, album: album};
  },
  // adds a playlist to the library
  addPlaylist: function(name) {
       let newId = generateUid();
       while (this.playlists[newId]) {
              newId = generateUid();
       }
       this.playlists[newId] = {id: newId, name: name, tracks: []};
  }
};

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
       return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};

// test
console.log('printPlaylists test');
library.printPlaylists();
console.log('--------------x--------------')

console.log('printTracks test');
library.printTracks();
console.log('--------------x--------------')

console.log('printPlaylist test');
library.printPlaylist('p01');
console.log('--------------x--------------')

console.log('addTrackToPlaylist test');
library.printPlaylist('p01');
library.addTrackToPlaylist('t03', 'p01');
library.printPlaylist('p01');
console.log('--------------x--------------')

console.log('addTrack test');
library.addTrack('Come Play', 'Stray Kids', 'Arcane 2');
library.printTracks();
console.log('--------------x--------------')

console.log('addPlaylist test');
library.addPlaylist('Now');
library.printPlaylists();
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