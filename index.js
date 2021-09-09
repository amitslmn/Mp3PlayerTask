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
    { id: 1, name: 'Metal', songs: [1,7,4] },
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
playSong(4)


function removeSongPlayer(id){  // function recieve song id and remove the song from player ;
  for(let song in player.songs) {
    if(player.songs[song].id === id) {
      player.songs.splice(song,1);
      return true;
    }
    
  }
  return false;
  
}
function removeSongPlaylist(id){ // function remove song from playlist ;
  for(let playlist of player.playlists) {
    for (let i in playlist.songs) {
      if(playlist.songs[i] === id) playlist.songs.splice(i, 1);
    }
  }
}

function removeSong(id) { // check if id is valid, if not throw an error ;
  if (removeSongPlayer(id)==false){
    throw new Error("id not exist !")
  }
(removeSongPlaylist(id));
} 

console.log(player.playlists);

function songMaxId(id =0){ // function check the max id in player ;
  for (let i in player.songs) {
    if (player.songs[i].id >id ) {
      id = player.songs[i].id ;
    }
  }
  return id ;
}
function songIdExists(id){ // function check if given id is exists in player songs ;
  for (let i in player.songs) {
    if (player.songs[i].id === id ) {
      return true ;
    }
    return false ;
  }
}

function playlistIdExists(id){ // function check if given id is exists in player playlists ;
  for (let i in player.playlists) {
    if (player.playlists[i].id === id ) {
      return true ;
    }
    return false ;
  }
}

function addSong(title, album, artist, duration, id) { // function add song to player with the given args ;
  if (id === undefined) {                          // id is optional. if not given its generate random id(max id +1)
    id = songMaxId() +1 ;}
    if (songIdExists(id)==true){
      throw 'id already exists ! '}
  duration = mmssTosec(duration);
  player.songs.push({id, title, album, artist, duration});
  return id ;

}
function mmssTosec(sec){ // convert mmss format to sec
  let mm = sec.slice(0,2)*60 ;
  let ss = sec.slice(3,5) ;
  return +mm + +ss;

}

function removePlaylist(id) {  // function remove playlist by given id and throw error if id not exist ;
  if (playlistIdExists(id) ===false){
    throw 'playlist id not exist ! '
  }
  for(let i in player.playlists) {
      if(player.playlists[i].id === id) {
        player.playlists.splice(i, 1);
      } 
    }
  }


function playlistMaxId(id=0){ // find the max id in player playlists ;
  for (let i in player.playlists) {
    if (player.playlists[i].id >id ) {
      id = player.playlists[i].id ;
    }
  }
  return id ;
}

function createPlaylist(name, id) { // create new empty playlist ;
  if (id === undefined) {                          
    id = playlistMaxId() +1 ;}
    if (playlistIdExists(id)==true){
      throw 'id already exists ! '
    }
  player.playlists.push({id, name, songs :[]});
  return id ;
}

function playPlaylist(id) {
  if (playlistIdExists(id)==false){
      throw " id not exist !"
  }
  let songID ;
  for(let i =0; i<player.playlists.length; i++){
    if (player.playlists[i].id===id){
      for ( let j =0; j<player.playlists[i].songs.length; j++){
      songID = player.playlists[i].songs[j] ;
      playSong(songID) ;
    }
  }

  }
  }


(playPlaylist(1));

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
