import React from 'react';
import KilosDeMSRemanentePorHectarea from '../calculations/KgMSRemanentePHa';

describe('Funcion Calcula Consumo de MS por Hectarea', () => {
  it('Retorna el numero correcto', () => {
    expect(KilosDeMSRemanentePorHectarea([10,2], 1, 20)).toEqual(12000);
  });
});
