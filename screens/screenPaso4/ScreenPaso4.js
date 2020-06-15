import React, {useState} from 'react';
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

export default function ScreenPaso4() {

  const [cantidadMedicionesRem, setCantidadMedicionesRem] = useState(["1"]);

  const handleAgregarMedicion = () => {
    const ultimoValor = parseInt(cantidadMedicionesRem[cantidadMedicionesRem.length-1]) + 1;
    const val = ultimoValor.toString()
    setCantidadMedicionesRem(cantidadMedicionesRem.concat(val));
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.screenTitle}>
          Ingrese los Kgs de Materia Verde Remanente
        </Text>

        <Inputs cantidadMediciones={cantidadMedicionesRem} />

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
