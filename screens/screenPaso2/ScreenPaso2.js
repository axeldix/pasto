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
    setSuperficie,
    setPorcentajeMateriaSeca,
    setCantidadDeVacas,
    setAreaCuadrante,
  } = useContext(GlobalContext);

  const handleSuperficie = (value) => {
    setSuperficie(value);
  };

  const handlePorcentajeMateriaSeca = (value) => {
    setPorcentajeMateriaSeca(value);
  };

  const handleCantidadVacas = (value) => {
    setCantidadDeVacas(value);
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
        />

        <TextInput
          placeholder="Porcentaje de Materia Seca"
          style={globalStyles.textInput}
          onChangeText={handlePorcentajeMateriaSeca}
        />

        <TextInput
          placeholder="Cantidad de Vacas"
          style={globalStyles.textInput}
          onChangeText={handleCantidadVacas}
        />

        <TextInput
          placeholder="Area del Cuadrante"
          style={globalStyles.textInput}
          onChangeText={handleAreaCuadrante}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
