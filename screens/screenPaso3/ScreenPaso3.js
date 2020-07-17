import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  ListItem,
} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import {Inputs} from '../../components';
import {GlobalContext} from '../../context/GlobalProvider';

export default function ScreenPaso3() {
  const {medidas, setMedidas} = useContext(GlobalContext);

  const [cantidadMediciones, setCantidadMediciones] = useState(['1']);

  const handleAgregarMedicion = () => {
    const ultimoValor =
      parseInt(cantidadMediciones[cantidadMediciones.length - 1]) + 1;
    const val = ultimoValor.toString();
    setCantidadMediciones(cantidadMediciones.concat(val));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.screenTitle}>
          Ingrese los Kgs de Materia Verde Disponible
        </Text>

        <Inputs cantidadMediciones={cantidadMediciones} />

        <Button
          title="Agregar Medicion"
          onPress={() => {
            handleAgregarMedicion();
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
