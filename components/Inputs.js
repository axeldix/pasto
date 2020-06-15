import React from 'react';
import {TextInput, FlatList, View} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default ({cantidadMediciones}) => {
  return (
    <FlatList
      data={cantidadMediciones.map((x) => x)}
      renderItem={({item}) => (
        <TextInput style={globalStyles.textInput} placeholder={`medicion nº: ${item}`} />
      )}
      keyExtractor={(item) => item}
    />
  );
};
