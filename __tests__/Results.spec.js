import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import Results from '../screens/results/Results';

describe('Results', () => {
  it('renders the correct message', () => {
    const {queryByText} = render(<Results />);
    expect(queryByText('Resultados')).not.toBeNull();
  });

  it('renders the Button Comenzar', () => {
    const {queryByText} = render(<Results />);
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
      ({getByTestId} = render(<Results/>));

      // fireEvent.changeText(getByTestId('messageText'), 'Hello world');
      fireEvent.press(getByTestId('botonGuardar'));
    });

    // it('clears the message field', () => {
    //   expect(getByTestId('messageText').props.value).toEqual('');
    // });

    // it('calls the send handler', () => {
    //   expect(sendHandler).toHaveBeenCalledWith(messageText);
    // });
  });
});
