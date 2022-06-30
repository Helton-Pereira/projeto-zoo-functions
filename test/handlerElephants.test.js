const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Returna Undefined caso nenhum parâmetro seja informado', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Retorna a mensagem "Parâmetro inválido, é necessário uma string" caso o parâmetro não seja uma string', () => {
    expect(handlerElephants(5)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Retorna quantidade de elefantes quando o parâmetro for "count"', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Retorna um array com a relação dos nomes de todos os elefantes quando o parâmetro for "name"', () => {
    expect(handlerElephants('names')).toEqual(['Ilana,', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Retorna a média de idade dos elefantes quando o parâmetro for "averageAge"', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Retorna a localização dos elefantes dentro do Zoológico quando o parâmetro for "location"', () => {
    expect(handlerElephants('location')).toEqual('NW');
  });
  it('Retorna a popularidade dos elefantes quando o parâmetro for "popularity"', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
