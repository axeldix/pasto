import React from 'react';
import {render} from 'react-native-testing-library';
import {GlobalProvider} from '../context/GlobalProvider';
import ScreenPaso1 from '../screens/screenPaso1/ScreenPaso1';


describe.only('Elements of ScreenPaso1', () => {

  it('renders the title of the screen', () => {
    const {queryByText} = render(<GlobalProvider> <ScreenPaso1 /> </GlobalProvider>);
    expect(queryByText('Completá los datos: Paso 1')).not.toBeNull();
  });

  it('renders a text input for date', () => {
    const {queryByPlaceholder} = render(<GlobalProvider> <ScreenPaso1 /> </GlobalProvider>);
    expect(queryByPlaceholder('Fecha')).not.toBeNull();
  });

  it('renders a text input for city', () => {
    const {queryByPlaceholder} = render(<GlobalProvider> <ScreenPaso1 /> </GlobalProvider>);
    expect(queryByPlaceholder('Localidad')).not.toBeNull();
  });

  it('renders a text input for Orchard Name', () => {
    const {queryByPlaceholder} = render(<GlobalProvider> <ScreenPaso1 /> </GlobalProvider>);
    expect(queryByPlaceholder('Establecimiento')).not.toBeNull();
  });

  it('renders a text input for Batch', () => {
    const {queryByPlaceholder} = render(<GlobalProvider> <ScreenPaso1 /> </GlobalProvider>);
    expect(queryByPlaceholder('Lote')).not.toBeNull();
  });



});
