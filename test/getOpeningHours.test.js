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
  it('Caso sejam passados "Monday" e "09:00-AM" como paramêtros, deve retornar mensagem que Zoo está fechado', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
  });
  it('Caso sejam passados "Tuesday" e "09:00-AM" como paramêtros, deve retornar a mensagem que o Zoo está aberto', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
  });
  it('Caso sejam passados "wednesday" e "09:00-PM" como paramêtros, deve retornar a mensagem que o Zoo está fechado', () => {
    expect(getOpeningHours('wednesday', '09:00-PM')).toEqual('The zoo is closed');
  });
  it('Caso sejam passados "Thu" e "09:00-PM" como paramêtros, deve lançar uma exceção informado que deve ser um dia válido', () => {
    expect(getOpeningHours('Thu', '09:00-AM')).toThrow(/^The day must be valid. Example: Monday$/);
  });
  it('Caso sejam passados "Friday" e "09:00-ZM" como paramêtros, deve lançar uma exceção informado que deve ser uma abreviação válida', () => {
    expect(getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Caso sejam passados "Saturday" e "C9:00-AM" como paramêtros, deve lançar uma exceção informado que a hora deve representar um número', () => {
    expect(getOpeningHours('Saturday', 'C9:00-AM')).toThrow(/^The hour should represent a number$/);
  });
  it('Caso sejam passados "Sunday" e "09:c0-AM" como paramêtros, deve lançar uma exceção informado que os minutos devem representar um número', () => {
    expect(getOpeningHours('Saturday', '09:c0-AM')).toThrow(/^The minutes should represent a number$/);
  });
  it('Caso a hora passada seja menor que zero ou maior que 12, deve lançar exceção informando quais os valores são aceitos', () => {
    expect(getOpeningHours('Saturday', '15:00-AM')).toThrow(/^The hour must be between 0 and 12$/);
  });
  it('Caso o minuto passado seja menor que zero ou maior que 59, deve lançar exceção informando quais os valores são aceitos', () => {
    expect(getOpeningHours('Saturday', '10:60-AM')).toThrow(/^The minutes must be between 0 and 59$/);
  });
});
