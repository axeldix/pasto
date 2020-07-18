import React, { useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {GlobalContext} from '../../context/GlobalProvider';
import {globalStyles} from '../../styles/globalStyles';

export default function ScreenPaso1() {

  const { setFecha, setLocalidad, setEstablecimiento, setLote } = useContext(GlobalContext)

  const handleFecha = (value) => {
    setFecha(value)
  }
  const handleLocalidad = (value) => {
    setLocalidad(value)
  }
  const handleEstablecimiento = (value) => {
    setEstablecimiento(value)
  }
  const handleLote = (value) => {
    setLote(value)
  }

  return (
    
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.screenTitle}>Completá los datos: Paso 1</Text>

        <TextInput
          style={globalStyles.textInput}
          placeholder="Fecha"
          onChangeText={handleFecha}
        />

        <TextInput
          style={globalStyles.textInput}
          placeholder="Localidad"
          onChangeText={handleLocalidad}
        />

        <TextInput
          style={globalStyles.textInput}
          placeholder="Establecimiento"
          onChangeText={handleEstablecimiento}
        />

        <TextInput
          style={globalStyles.textInput}
          placeholder="Lote"
          onChangeText={handleLote}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
