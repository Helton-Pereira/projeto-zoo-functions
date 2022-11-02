const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getlist = () => (
  { NE: species.filter((e) => e.location === 'NE').map((element) => element.name),
    NW: species.filter((e) => e.location === 'NW').map((element) => element.name),
    SE: species.filter((e) => e.location === 'SE').map((element) => element.name),
    SW: species.filter((e) => e.location === 'SW').map((element) => element.name),
  });

const getAnimalNames = () => {
  const result = { NE: species.filter((e) => e.location === 'NE').map((element) => element.name),
    NW: species.filter((e) => e.location === 'NW').map((element) => element.name),
    SE: species.filter((e) => e.location === 'SE').map((element) => element.name),
    SW: species.filter((e) => e.location === 'SW').map((element) => element.name),
  };
  return result;
};

// const getAnimalsbySex = () => {

// }

function getAnimalMap(options) {
  if (options === undefined || options.includesNames === undefined) {
    return getlist();
  } if (options.includesNames === true) {
    return getAnimalMap();
  }
}

console.log(getAnimalNames());

module.exports = getAnimalMap;
