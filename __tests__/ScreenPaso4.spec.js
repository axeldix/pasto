import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {GlobalProvider} from '../context/GlobalProvider'
import ScreenPaso4 from '../screens/screenPaso4/ScreenPaso4';

describe('ScreenPaso4', () => {
  it('renders the correct screen title', () => {
    const {queryByText} = render(<GlobalProvider> <ScreenPaso4/> </GlobalProvider>)
    expect(
      queryByText('Ingrese los Kgs de Materia Verde Remanente')).not.toBeNull();
  });

  it('renders the textInput for Materia Remanente', () => {
    const {queryByPlaceholder} = render(<GlobalProvider> <ScreenPaso4/> </GlobalProvider>)
    expect(queryByPlaceholder('medicion nº: 1')).not.toBeNull();
  });

  it('renders the Button for another input of Materia Remanente', () => {
    const {queryByText} = render(<GlobalProvider> <ScreenPaso4/> </GlobalProvider>)
    expect(queryByText('Agregar Medicion')).not.toBeNull();
  });
});

//Debe testear que cuando se hace click en el boton "agregarMedicion"
//se agrega un text input.
describe('funcionamiento del boton agregarMedicion', () => {
  describe('clicking boton agregar medicion', () => {
    it('renders the correct quantity of text inputs', () => {
      const {queryByPlaceholder} = render(<GlobalProvider> <ScreenPaso4/> </GlobalProvider>)
      expect(queryByPlaceholder('medicion nº: 1')).not.toBeNull();
    });

    it('renders the correct quantity of text inputs when pressed button', () => {
      const {getByTestId, getByPlaceholder} = render(<GlobalProvider> <ScreenPaso4/> </GlobalProvider>)
      fireEvent.press(getByTestId('agregarMedicion'));
      fireEvent.press(getByTestId('agregarMedicion'));

      expect(getByPlaceholder('medicion nº: 1')).not.toBeNull();
      expect(getByPlaceholder('medicion nº: 2')).not.toBeNull();
      expect(getByPlaceholder('medicion nº: 3')).not.toBeNull();
    });
  });
});
