import React from 'react';
import {render} from 'react-native-testing-library';
import Results from '../screens/results/Results';

describe('Results', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Results />);
    expect(queryByText('Results')).not.toBeNull();
  });

  it('renders the Button Comenzar', () => {
    const {queryByText} = render(<Results />);
    expect(queryByText('Comenzar')).not.toBeNull();
  });
});
