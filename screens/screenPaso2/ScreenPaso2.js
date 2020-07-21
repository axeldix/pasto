import React, {useContext} from 'react';
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
  const {
    setRecurso,
    setSuperficieParcela,
    setPorcentajeMateriaSeca,
    setCantidadDeAnimales,
    setAreaCuadrante,
  } = useContext(GlobalContext);

  const handleSuperficie = (value) => {
    setSuperficieParcela(value);
  };

  const handlePorcentajeMateriaSeca = (value) => {
    setPorcentajeMateriaSeca(value);
  };

  const handleCantidadVacas = (value) => {
    setCantidadDeAnimales(value);
  };

  const handleAreaCuadrante = (value) => {
    setAreaCuadrante(value);
  };

  const handleRecurso = (value) => {
    setRecurso(value);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.container}>
        <Text style={globalStyles.screenTitle}>Completá los datos: Paso 2</Text>

        <TextInput
          style={globalStyles.textInput}
          placeholder="Recurso"
          onChangeText={handleRecurso}
        />

        <TextInput
          placeholder="Superficie de parcela (Ha.)"
          style={globalStyles.textInput}
          onChangeText={handleSuperficie}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Porcentaje de Materia Seca"
          style={globalStyles.textInput}
          onChangeText={handlePorcentajeMateriaSeca}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Cantidad de Vacas"
          style={globalStyles.textInput}
          onChangeText={handleCantidadVacas}
          keyboardType="numeric"
        />

        <TextInput
          placeholder="Area del Cuadrante"
          style={globalStyles.textInput}
          onChangeText={handleAreaCuadrante}
          keyboardType="numeric"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
