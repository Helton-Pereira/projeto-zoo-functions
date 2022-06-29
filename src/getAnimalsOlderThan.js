const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.filter((specie) => specie.name === animal).every((element) => {
    return element.residents.age >= age;
  });
}

// console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
