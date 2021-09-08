const player = {
  songs: [
    {
      id: 1,
      title: 'Vortex',
      album: 'Wallflowers',
      artist: 'Jinjer',
      duration: 242,
    },
    {
      id: 2,
      title: 'Vinda',
      album: 'Godtfolk',
      artist: 'Songleikr',
      duration: 160,
    },
    {
      id: 7,
      title: 'Shiroyama',
      album: 'The Last Stand',
      artist: 'Sabaton',
      duration: 213,
    },
    {
      id: 3,
      title: 'Thunderstruck',
      album: 'The Razors Edge',
      artist: 'AC/DC',
      duration: 292,
    },
    {
      id: 4,
      title: 'All is One',
      album: 'All is One',
      artist: 'Orphaned Land',
      duration: 270,
    },
    {
      id: 5,
      title: 'As a Stone',
      album: 'Show Us What You Got',
      artist: 'Full Trunk',
      duration: 259,
    },
  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1, 7, 4] },
    { id: 5, name: 'Israeli', songs: [4, 5] },
  ],
  playSong(song) {
    console.log(`Playing ${song.title} from ${song.album} by ${song.artist} | ${secToMmssFormat(song.duration)}.`);
  },
}

function secToMmssFormat(sec){ // recieve the duration in sec and return it in mm:ss format ;
  let mm ;
  let ss = sec ;
  let output =0;
  mm =  Math.floor(sec/60) ;
  ss -= mm*60
  if (ss<10){
    ss = "0" + ss ;
  }
  if (ss>=60){
    mm++ ;
    sec -=60 ; }
  if (sec>=600) {
    output =  mm + ":" + ss ; }
 else {
   output +=  mm + ":" + ss ;}
return  output ;
}

function playSong(id) {
  for(let song of player.songs){
    if(song.id === id){
      return player.playSong(song);
    }
  }
  throw new Error("No such ID");
}
console.log(playSong(2));

function removeSong(id) {
  // your code here
}

function addSong(title, album, artist, duration, id) {
  // your code here
}

function removePlaylist(id) {
  // your code here
}

function createPlaylist(name, id) {
  // your code here
}

function playPlaylist(id) {
  // your code here
}

function editPlaylist(playlistId, songId) {
  // your code here
}

function playlistDuration(id) {
  // your code here
}

function searchByQuery(query) {
  // your code here
}

function searchByDuration(duration) {
  // your code here
}

module.exports = {
  player,
  playSong,
  removeSong,
  addSong,
  removePlaylist,
  createPlaylist,
  playPlaylist,
  editPlaylist,
  playlistDuration,
  searchByQuery,
  searchByDuration,
}
