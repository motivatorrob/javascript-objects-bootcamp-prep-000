const playlist = {WHouston:"I will always love you"}

function updatePlaylist(playlist, artistName, songTitle){
      playlist [artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist [artistName]
  return playlist
}

/////use square brackets when, as with artistName, key is not a simple string e.g. when it is a variable 