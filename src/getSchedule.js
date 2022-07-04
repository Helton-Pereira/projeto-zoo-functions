const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allDaysAndAnimals = {
  Tuesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: 'Open from 8am until 6pm',
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: 'Open from 10am until 8pm',
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
};

const animalNames = species.map((animal) => animal.name);
const days = Object.keys(hours);

const notParam = (param) => {
  if (param === undefined) {
    return allDaysAndAnimals;
  } if (!animalNames.includes(param) || !days.includes(param)) {
    return allDaysAndAnimals;
  }
};

function getSchedule(scheduleTarget) {
  if (animalNames.includes(scheduleTarget)) {
    const result = species.find((specie) => scheduleTarget === specie.name);
    return result.availability;
  } if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    }
  } if (days.includes(scheduleTarget)) {
    const exhibitionDays = species.filter((specie) => specie.availability.includes(scheduleTarget));
    const getDay = days.find((day) => day === scheduleTarget);
    const { open, close } = hours[getDay];
    const result = {};
    result[getDay] = { officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: exhibitionDays.map((e) => e.name),
    };
    return result;
  }
  return notParam(scheduleTarget);
}

module.exports = getSchedule;
