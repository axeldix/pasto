import React from 'react';
import {render} from 'react-native-testing-library';
import ScreenPaso3 from '../screens/screenPaso3/ScreenPaso3';

describe('ScreenPaso3', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<ScreenPaso3 />);
    expect(queryByText('Soy la pagina ScreenPaso3')).not.toBeNull();
  });
});
