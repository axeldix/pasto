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

export default function ScreenPaso3() {

  const [cantidadMediciones, setCantidadMediciones] = useState(["1"]);

  const handleAgregarMedicion = () => {
    const ultimoValor = parseInt(cantidadMediciones[cantidadMediciones.length-1]) + 1;
    const val = ultimoValor.toString()
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
            console.log("soy ScreenPaso3 "+ cantidadMediciones);
            handleAgregarMedicion();
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
