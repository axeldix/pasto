import React from 'react';
import Promedio from '../calculations/Promedio';

describe('Funcion Promedio', () => {
  it('returns the correct result for 2 given numbers', () => {
    expect(Promedio([4,8])).toEqual(6);
  });
});
