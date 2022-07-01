const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const getId = data.employees.find((employee) => employee.id === id);
  const firstSpecie = getId.responsibleFor[0];
  const getAnimal = data.species.find((specie) => specie.id === firstSpecie);
  const { residents } = getAnimal;
  const getOldest = residents.reduce((a, b) => {
    if (a.age > b.age) {
      return a;
    }
    return b;
  });
  const { name, sex, age } = getOldest;
  return [name, sex, age];
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');

module.exports = getOldestFromFirstSpecies;
