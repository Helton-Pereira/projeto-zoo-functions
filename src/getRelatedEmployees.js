const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managers = [stephanieId, olaId, burlId, 'b0dc644a-5335-489b-8a2c-4e086c7819a2'];

function isManager(id) {
  return managers.some((manager) => id === manager);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const result = employees.filter((employee) => (employee.managers.includes(managerId)
  ));
  return result.map((e) => `${e.firstName} ${e.lastName}`);
}

// responsibleFor.map((element) => element.responsibleFor)
console.log(getRelatedEmployees(stephanieId));
module.exports = { isManager, getRelatedEmployees };
