import React from 'react';
import {render} from 'react-native-testing-library';
import ScreenPaso3 from '../screens/screenPaso3/ScreenPaso3';

describe('ScreenPaso3', () => {

  it('renders the correct screen title', () => {
    const {queryByText} = render(<ScreenPaso3 />);
    expect(queryByText('Ingrese los Kgs de Materia Verde Disponible')).not.toBeNull();
  });

  it('renders the textInput for Materia Verde', () => {
    const { queryByPlaceholder } = render(<ScreenPaso3/>);
    expect(queryByPlaceholder('1')).not.toBeNull();
  });

  it('renders the Button for another input of Materia Verde', () => {
    const { queryByText } = render(<ScreenPaso3/>);
    expect(queryByText('Agregar Medicion')).not.toBeNull();
  });

});
