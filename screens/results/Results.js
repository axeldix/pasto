import React, {useContext} from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../../styles/globalStyles';
import Promedio from '../../calculations/Promedio';
import KgMSDisponiblePHa from '../../calculations/KgMSDisponiblePHa';
import KgMSRemanentePHa from '../../calculations/KgMSRemanentePHa';
import ConsumoMSPorHectarea from '../../calculations/ConsumoDeMSPHa';
import MetrosCuadradosPorAnimal from '../../calculations/MetrosCuadradosPorAnimal';
import ConsumoAnimal from '../../calculations/ConsumoAnimal';
import PorcentajeDeAprovechamiento from '../../calculations/PorcentajeDeAprovechamiento';
import {GlobalContext} from '../../context/GlobalProvider';

export default function Results() {
  const {medidas, areaCuadrante, porcentajeMateriaSeca, superficieParcela, cantidadDeAnimales} = useContext(
    GlobalContext,
  );

  const materiaSecaDisponible = KgMSDisponiblePHa(
    [medidas.materiaVerdeDisponible],
    areaCuadrante,
    porcentajeMateriaSeca,
  )

  const materiaSecaRemanente = KgMSRemanentePHa(
    [medidas.materiaVerdeRemanente],
    areaCuadrante,
    porcentajeMateriaSeca,
  )

  const consumoDeMateriaSecaPHa = ConsumoMSPorHectarea(materiaSecaDisponible, materiaSecaRemanente)

  const consumoDeMateriaSecaPAnimalPTurno = ConsumoAnimal(consumoDeMateriaSecaPHa, superficieParcela, cantidadDeAnimales)

  const porcentajeDeAprovechamiento = PorcentajeDeAprovechamiento(consumoDeMateriaSecaPHa, materiaSecaDisponible)

  const metrosCuadradosPAnimal = MetrosCuadradosPorAnimal(superficieParcela, cantidadDeAnimales)

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>Resultados</Text>
      <Text>Kg MS/Ha Disponible</Text>
      <Text>
        {materiaSecaDisponible }
      </Text>
      <Text>Kg MS/Ha Remanente</Text>
      <Text>
        {materiaSecaRemanente}
      </Text>
      <Text>Consumo Kg MS/Ha</Text>
      <Text>{isNaN(consumoDeMateriaSecaPHa) ? 0 : consumoDeMateriaSecaPHa}</Text>
      <Text>Consumo Kg MS/Animal/Turno</Text>
      <Text>{isNaN(consumoDeMateriaSecaPAnimalPTurno) ? 0 : consumoDeMateriaSecaPAnimalPTurno}</Text>
      <Text>% Aprovechamiento</Text>
      <Text>{isNaN(porcentajeDeAprovechamiento) ? 0 : porcentajeDeAprovechamiento}</Text>
      <Text>m2/Animal</Text>
      <Text>{isNaN(metrosCuadradosPAnimal) ? 0 : metrosCuadradosPAnimal}</Text>
      <Button title="Guardar" testID="botonGuardar" />
    </View>
  );
}
