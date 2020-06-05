import React from 'react';
import {render} from 'react-native-testing-library';
import ScreenPaso2 from '../screens/screenPaso2/ScreenPaso2';

describe('ScreenPaso2', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<ScreenPaso2 />);
    expect(queryByText('ScreenPaso2')).not.toBeNull();
  });
});
