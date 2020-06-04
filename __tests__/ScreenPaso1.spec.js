import React from 'react';
import {render} from 'react-native-testing-library';
import ScreenPaso1 from '../screens/screenPaso1/ScreenPaso1';

describe('ScreenPaso1', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<ScreenPaso1 />);
    expect(queryByText('Soy la pagina ScreenPaso1')).not.toBeNull();
  });
});