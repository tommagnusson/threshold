
window.onload = function() {

  let songs = document.getElementsByClassName('soundList__item');
  console.info("Hey I'm actually getting called.");
  console.info(songs);
  console.info(songs.length);
  console.info(songs[0]);
  for (var i = 0; i < songs.length; i++) {

    let currentSong = songs[i];

    console.info("Iterating through " + i);
    // grab number of likes and number of plays
    // Since we're within the single song div, we only should yield one element
    let likes = parseInt(currentSong.getElementsByClassName('sc-button-like')[0].innerHTML);
    var plays = currentSong.getElementsByClassName('sc-visuallyhidden')[1].innerHTML; // second visually hidden element

    plays = plays.replace(/\D/g, ''); // remove all non digit characters
    console.info(parseInt(plays));

    let ratio = parseInt(plays / likes); // simple ratio for now
    console.info("Ratio: " + ratio);

    songs
  }
}
