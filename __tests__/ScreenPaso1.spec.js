import React from 'react';
import {render} from 'react-native-testing-library';
import ScreenPaso1 from '../screens/screenPaso1/ScreenPaso1';


describe.only('Elements of ScreenPaso1', () => {

  it('renders the title of the screen', () => {
    const {queryByText} = render(<ScreenPaso1 />);
    expect(queryByText('Completá los datos: Paso 1')).not.toBeNull();
  });

  it('renders a text input for date', () => {
    const {queryByPlaceholder} = render(<ScreenPaso1 />);
    expect(queryByPlaceholder('Fecha')).not.toBeNull();
  });

  it('renders a text input for city', () => {
    const {queryByPlaceholder} = render(<ScreenPaso1 />);
    expect(queryByPlaceholder('Localidad')).not.toBeNull();
  });

  it('renders a text input for Orchard Name', () => {
    const {queryByPlaceholder} = render(<ScreenPaso1 />);
    expect(queryByPlaceholder('Establecimiento')).not.toBeNull();
  });

  it('renders a text input for Batch', () => {
    const {queryByPlaceholder} = render(<ScreenPaso1 />);
    expect(queryByPlaceholder('Lote')).not.toBeNull();
  });



});
