import React from 'react';
import MetrosCuadradosPorAnimal from '../calculations/MetrosCuadradosPorAnimal';

describe('Funcion Calcula Metros cuadrados por animal', () => {
  it('Retorna el numero correcto', () => {
    expect(MetrosCuadradosPorAnimal(10, 20)).toEqual(5000);
  });
});
