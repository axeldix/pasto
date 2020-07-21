import React from 'react';
import ConsumoAnimal from '../calculations/ConsumoAnimal';

describe('Funcion Calcula Consumo por animal', () => {
  it('Retorna el numero correcto', () => {
    expect(ConsumoAnimal(10, 100, 50)).toEqual(20);
  });
});
