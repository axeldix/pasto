import React from 'react';
import {render} from 'react-native-testing-library';
import {GlobalProvider} from '../context/GlobalProvider'
import {Inputs} from '../components';

describe('Inputs', () => {

  it('renders the correct placeholder fo the inputs', () => {
    const val = ["1"]
    const {queryByPlaceholder} = render(<GlobalProvider><Inputs cantidadMediciones={val} /> </GlobalProvider>);
    expect(queryByPlaceholder('medicion nº: 1')).not.toBeNull();
  });

});
