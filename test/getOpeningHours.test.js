const getOpeningHours = require('../src/getOpeningHours');

const expectedList = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('Caso paramêtros não sejam passados, deve retornar um objeto com dias e horários de funcionamento do Zoo', () => {
    expect(getOpeningHours()).toEqual(expectedList);
  });
});
