import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import Promedio from '../../calculations/Promedio';
import KgMSDisponiblePHa from '../../calculations/KgMSDisponiblePHa';
import {GlobalContext} from '../../context/GlobalProvider';

export default function Results() {
  const {medidas, areaCuadrante, porcentajeMateriaSeca} = useContext(
    GlobalContext,
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>Resultados</Text>
      <Text>Kg MS/Ha Disponible</Text>
      <Text>
        {KgMSDisponiblePHa([medidas.materiaVerdeDisponible], areaCuadrante, porcentajeMateriaSeca)} valor
      </Text>
      <Text>Kg MS/Ha Remanente</Text>
      <Text>valor</Text>
      <Text>Consumo Kg MS/Ha</Text>
      <Text>valor</Text>
      <Text>Consumo Kg MS/Animal/Turno</Text>
      <Text>valor</Text>
      <Text>% Aprovechamiento</Text>
      <Text>valor</Text>
      <Text>m2/Animal</Text>
      <Text>valor</Text>

      <Button title="Guardar" testID="botonGuardar" />
    </View>
  );
}
