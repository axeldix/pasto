import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';

export default function ScreenPaso3() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.screenTitle}>
          Ingrese los Kgs de Materia Verde Disponible
        </Text>

        <TextInput style={globalStyles.textInput} placeholder="1" />

        <Button title="Agregar Medicion" />
      </View>
    </TouchableWithoutFeedback>
  );
}
