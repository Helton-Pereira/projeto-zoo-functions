const en = require('faker/lib/locales/en');
const data = require('../data/zoo_data');

const array = [
	{ name:  'Lara Carvalho', age:  5 },
	{ name:  'Frederico Moreira', age:  5 },
	{ name:  'Pedro Henrique Carvalho', age:  5 },
	{ name:  'Maria Costa', age:  18 },
	{ name:  'Núbia Souza', age:  18 },
	{ name:  'Carlos Nogueira', age:  50 },
];

function countEntrants(entrants) {
  const child = entrants.filter((element) => element.age >= 0 && element.age < 18);
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50);
  const senior = entrants.filter((element) => element.age >= 50);
  const total = { child: child.length,
    adult: adult.length,
    senior: senior.length };
  return total;
}

function calculateEntry(entrants) {
  if (entrants === undefined) {
    return 0;
  } if (Object.keys(entrants).length === 0) {
    return 0;
  } const { child, adult, senior } = countEntrants(entrants);
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
}

console.log(calculateEntry(array));

module.exports = { calculateEntry, countEntrants };
