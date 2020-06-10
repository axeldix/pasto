import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function ScreenPaso1() {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
       >
      <View style={globalStyles.container}>
        <Text style={globalStyles.screenTitle}>Completá los datos: Paso 1</Text>

        <TextInput style={globalStyles.textInput} placeholder="Fecha" />

        <TextInput style={globalStyles.textInput} placeholder="Localidad" />

        <TextInput style={globalStyles.textInput} placeholder="Establecimiento" />

        <TextInput style={globalStyles.textInput} placeholder="Lote" />

        <TextInput style={globalStyles.textInput} placeholder="Recurso" />
      </View>
    </TouchableWithoutFeedback>
  );
}
