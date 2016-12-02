
window.onload = function() {

  let songs = document.getElementsByClassName('soundList__item');
  console.info("Hey I'm actually getting called.");
  for (var i = 0; i < songs.length; i++) {

    let currentSong = songs[i];

    console.info("Iterating through " + i);
    // grab number of likes and number of plays
    // Since we're within the single song div, we only should yield one element
    let likes = parseInt(currentSong.getElementsByClassName('sc-button-like')[0].innerHTML);
    var plays = currentSong.getElementsByClassName('sc-visuallyhidden')[1].innerHTML; // second visually hidden element

    // plays comes like "12,445 plays to date" or something like that
    plays = plays.replace(/\D/g, ''); // remove all non digit characters

    let ratio = parseInt(parseInt(plays) / likes); // simple ratio for now
    console.info("Ratio: " + ratio);

    currentSong.getElementsByClassName("soundTitle__usernameText")[0].innerHTML += " RATIO: <strong>" + ratio + "</strong>";
  }
}
