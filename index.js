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
    {
      id: 55,
      title: 'As a Stone',
      album: 'Show Us WhGFGDGFDGat Y3423423423ou Got',
      artist: 'Full Trunk',
      duration: 259,
    },

  ],
  playlists: [
    { id: 1, name: 'Metal', songs: [1,7,4] },
    { id: 5, name: 'Israeli', songs: [4,5] }, 
    { id: 9, name: 'Metal', songs: [4,5,1,1,1] }, 
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


function songMaxId(id =0){ // function check the max id in player ;
  for (let i in player.songs) {
    if (player.songs[i].id >id ) {
      id = player.songs[i].id ;
    }
  }
  return id ;
}
function songIdExists(id){ // function check if given id is exists in player songs ;
  for (let i =0; i<player.songs.length; i++) {
    if (player.songs[i].id === id ) {
      return true ;
    }
  }
  return false ;
}


function playlistIdExists(id){ // function check if given id is exists in player playlists ;
  for (let i in player.playlists) {
    if (player.playlists[i].id === id ) {
      return true ;
    }
  }
  return false ;
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
      id = player.playlists[i].id ; }}
  return id ;
}

function createPlaylist(name, id) { // create new empty playlist ;
  if (id === undefined) {                          
    id = playlistMaxId() +1 ;}
    if (playlistIdExists(id)==true){
      throw 'id already exists ! ' }
  player.playlists.push({id, name, songs :[]});
  return id ;
}

function playPlaylist(id) {
  if (playlistIdExists(id)==false){
      throw " id not exist !"}
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
  
function playlistIdIndex(id){ // function return index of given palylist id ;
  for (let i in player.playlists) {
    if (player.playlists[i].id === id ) {
      return i ;
    }
  }
}

function songIdIndex(id){ // function return index of given song id ;
  for (let i in player.songs) {
    if (player.songs[i].id === id ) {
      return i ;
    }
  }
}

  function songIdInPlaylist(playlistId,songId){ // function check if given song id inside given playlist, remove  
    if(playlistIdExists(playlistId)===true){    // it if exists in playlist, and if playlist empty remove playlist;
      let playlistIndex = playlistIdIndex(playlistId) ;
      for (let i =0; i<player.playlists[playlistIndex].songs.length; i++) {
        if (player.playlists[playlistIndex].songs[i] === songId ) {
          player.playlists[playlistIdIndex(playlistId)].songs.splice(i,1) ;
          let len = player.playlists[playlistIdIndex(playlistId)].songs.length ;
          if (len ==0) {
            player.playlists.splice([playlistIdIndex(playlistId)],1) ;
          }
          return true ; 
        }
      }  
      return false ;
      }
    else{
        throw 'false playlist id' ;
      }
  }

function editPlaylist(playlistId, songId) {
  if (songIdExists(songId)==false){
    throw 'song id not exist !' }
  if (songIdInPlaylist(playlistId,songId)===false){
    player.playlists[playlistIdIndex(playlistId)].songs.push(songId);
    return player.playlists ; }
  return false ;
}



function playlistDuration(id) { // function gets playlist id and return plalist duration ;
  let duration = 0 ;
  let index = playlistIdIndex(id) ;
  for (let i =0; i<player.playlists[index].songs.length;i++){
    duration += player.songs[songIdIndex(player.playlists[index].songs[i])].duration;  }
  return duration ;
}

function searchByQuery(query) {
  let objValueArr = [];
  for (let i =0; i<player.songs.length; i++) {  // make the sort by title, case sensetive 
    let objValue = Object.values(player.songs[i])
    for (let j=0 ; j< objValue.length; j++ ){
      if (objValue[j] == query) {
        objValueArr.push(objValue) ;
    }
  }
}
let playlistArr = [];
for (let i =0; i<player.playlists.length; i++) { // make the sort by name, case sensetive 
  let nameCheck = player.playlists[i].name;
  if (nameCheck == query) {
     playlistArr.push(player.playlists[i]) ;
  }
}
  if (objValueArr.length===0 && playlistArr.length===0){
    throw 'query not found  !'
  } 
  return  objValueArr ,  playlistArr;
}

function serachPlaylistDuration(duration){ // function return the nearest given duration in playlist ;
let difference1 = 0 ;
let difference2 = 0 ;
let playlistIndex =0 ;
difference1 = Math.abs(playlistDuration(player.playlists[0].id)-duration) ;
for (let i=1; i<player.playlists.length ; i++){
  difference2 = Math.abs(duration - playlistDuration(player.playlists[i].id)) ;
  if(difference2 <difference1){
    playlistIndex = i ;
  }
}
return  player.playlists[playlistIndex];
}

function searchByDuration(duration) { // search the nearest given duration in songs and compare with    
  let playlistOutput = serachPlaylistDuration(duration) ; // serachPlaylistDuration() and return the closest one ;
  let newDuration = mmssTosec(duration);
  let songOutput  ;
  let difference1 = 0 ;
  let difference2 = 0 ;
  let songIndex =0 ;
  difference1 = Math.abs(player.songs[0].duration-newDuration) ;
  for (let i=1; i<player.songs.length ; i++){
    difference2 = Math.abs(newDuration - player.songs[i].duration) ;
    if(difference2 <difference1){
      songIndex = i ;
    }
  }
  songOutput = player.songs[songIndex] ;
  difference1 = newDuration - player.songs[songIndex].duration;
  difference1 = Math.abs(difference1);
  difference2 = newDuration - playlistDuration(playlistOutput.id);
  difference2 = Math.abs(difference2)
  if ( difference1< difference2){
    return songOutput ;
  }
  else {
    return playlistOutput ;
  }
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
