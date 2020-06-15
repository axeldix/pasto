import React from 'react';
import {render} from 'react-native-testing-library';
import ScreenPaso4 from '../screens/screenPaso4/ScreenPaso4';

describe('ScreenPaso4', () => {

  it('renders the correct screen title', () => {
    const {queryByText} = render(<ScreenPaso4 />);
    expect(queryByText('Ingrese los Kgs de Materia Verde Remanente')).not.toBeNull();
  });

  it('renders the textInput for Materia Remanente', () => {
    const { queryByPlaceholder } = render(<ScreenPaso4/>);
    expect(queryByPlaceholder('medicion nº: 1')).not.toBeNull();
  });

  it('renders the Button for another input of Materia Remanente', () => {
    const { queryByText } = render(<ScreenPaso4/>);
    expect(queryByText('Agregar Medicion')).not.toBeNull();
  });

});
