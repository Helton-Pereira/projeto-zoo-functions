const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((element) => { obj[element.name] = element.residents.length; });
    return obj;
  } const result = species.find((specie) => specie.name === animal.specie);
  if (animal.sex === undefined) {
    return result.residents.length;
  } const resultSex = result.residents.filter((resident) => resident.sex === animal.sex);
  return resultSex.length;
}

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
