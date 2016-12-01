
let songs = document.getElementsByClassName('soundList__item');

for (var i = 0; i < songs.length; i++) {
  // grab number of likes and number of plays
  // Since we're within the single song div, we only should yield one element
  let likes = parseInt(songs.getElementsByClassName('sc-button-like')[0].innerHTML);
  let plays = parseInt(songs.getElementsByClassName('sc-visuallyhidden')[0].innerHTML);

  let ratio = plays / likes; // simple ratio for now

  // put the ratio next to the number of plays on the page
  let stats = songs.getElementsByClassName('soundStats')[0];
  let ratioElement = document.createElement('li');
  ratioElemet.appendChild(document.createTextNode(ratio));
}
