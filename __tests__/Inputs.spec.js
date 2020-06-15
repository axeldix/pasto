
import React from 'react';
import {render} from 'react-native-testing-library';
import {Inputs} from '../components';

describe('Inputs', () => {

  it('renders the correct placeholder fo the inputs', () => {
    const val = ["1"]
    const {queryByPlaceholder} = render(<Inputs cantidadMediciones={val} />);
    expect(queryByPlaceholder('medicion nº: 1')).not.toBeNull();
  });

});
