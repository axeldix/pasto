
import React from 'react';
import {render} from 'react-native-testing-library';
import {Inputs} from '../components';

describe('Inputs', () => {

  it('renders the correct placeholder fo the inputs', () => {
    const {queryByPlaceholder} = render(<Inputs />);
    expect(queryByPlaceholder('1')).not.toBeNull();
  });

});
