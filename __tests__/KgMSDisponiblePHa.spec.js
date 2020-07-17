import React from 'react';
import KilosDeMSDisponiblePorHectarea from '../calculations/KgMSDisponiblePHa';

describe('Funcion Calcula Kgs de Materia Seca Disponible por Hectarea', () => {
  it('Retorna el numero correcto', () => {
    expect(KilosDeMSDisponiblePorHectarea([10, 2], 1, 20)).toEqual(12000);
  });
});
