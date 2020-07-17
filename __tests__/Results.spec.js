import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {GlobalProvider} from '../context/GlobalProvider';
import Results from '../screens/results/Results';

describe('Results', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(
      <GlobalProvider>
        {' '}
        <Results />{' '}
      </GlobalProvider>,
    );
    expect(queryByText('Resultados')).not.toBeNull();
  });

  it('renders the Button Comenzar', () => {
    const {queryByText} = render(
      <GlobalProvider>
        {' '}
        <Results />{' '}
      </GlobalProvider>,
    );
    expect(queryByText('Guardar')).not.toBeNull();
  });
});

describe('Pagina de Resultados', () => {
  describe('clicking send', () => {
    const messageText = 'Hello world';
    let sendHandler;
    let getByTestId;

    beforeEach(() => {
      sendHandler = jest.fn();
      ({getByTestId} = render(
        <GlobalProvider>
          {' '}
          <Results />{' '}
        </GlobalProvider>,
      ));
      fireEvent.press(getByTestId('botonGuardar'));
    });
  });
});
