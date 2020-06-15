import React from 'react';
import { TextInput, FlatList } from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default ({ cantidadMediciones }) => {
  return (
    <FlatList
      data= { cantidadMediciones.map(x => x)}
      renderItem= { (x) => <TextInput style={globalStyles.textInput} placeholder={"medicion"} />}
      keyExtractor= {i => i}
    />
  )
}
