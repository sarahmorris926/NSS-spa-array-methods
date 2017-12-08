var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");


// Use the forEach method to add the name of each planet to a div element in your HTML with an id of "planets".

planets.forEach(function(planet) {
  el.innerHTML += planet + " ";
})

// Use the map method to create a new array where the first letter of each planet is capitalized
let upperCase = planets.map(function(planet) {
  return planet.charAt(0).toUpperCase() + planet.slice(1);
})


// Use the filter method to create a new array that contains planets with the letter 'e'
let filtered = planets.filter(planetE => planetE.indexOf("e") >= 0);



// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let reduced = words.reduce(function(x, y, z) {
  return z = `${x} ${y}`
});



