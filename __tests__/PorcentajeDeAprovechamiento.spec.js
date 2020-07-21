import React from 'react';
import PorcentajeDeAprovechamiento from '../calculations/PorcentajeDeAprovechamiento';

describe('Funcion Calcula Porcentaje De Aprovechamiento', () => {
  it('Retorna el numero correcto', () => {
    expect(PorcentajeDeAprovechamiento(40, 100)).toEqual(40);
  });
});
