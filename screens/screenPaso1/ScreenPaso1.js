import React from 'react';
import { View, Text, TextInput } from 'react-native';

export default function ScreenPaso1() {
  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>

      <Text>Soy la pagina ScreenPaso1</Text>

      <TextInput
        placeholder="Fecha"
        >

      </TextInput>
    </View>
  )
}
