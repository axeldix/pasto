import React from 'react';
import ConsumoMSPorHectarea from '../calculations/ConsumoDeMSPHa';

describe('Funcion Calcula Consumo de MS por Hectarea', () => {
  it('Retorna el numero correcto', () => {
    expect(ConsumoMSPorHectarea(10,2)).toEqual(8);
  });
});
