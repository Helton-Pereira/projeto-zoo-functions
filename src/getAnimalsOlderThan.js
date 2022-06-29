const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { residents } = species.find((specie) => specie.name === animal);
  return residents.every((resident) => resident.age >= age);
}

// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
