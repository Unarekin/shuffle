'use strict'

/**
 * A fairly efficient knuth/Fischer-Yates shuffle implementation
 * @param {Array} array - Array to be shuffled
 * @returns {Array} Shuffled array
 */

function shuffle(input) {
	var array;
	if (input && Array.isArray(input))
		array = input.slice();
	else if (Array.isArray(this))
		array = this;

  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}





module.exports = shuffle;