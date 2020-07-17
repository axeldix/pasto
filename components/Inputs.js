import React, { useContext } from 'react';
import { TextInput, FlatList, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { GlobalContext } from '../context/GlobalProvider'

export default ({cantidadMediciones}) => {

  const {setMedidas} = useContext(GlobalContext)

  return (
    <FlatList
      data={cantidadMediciones.map((x) => x)}
      renderItem={({item}) => (
        <TextInput style={globalStyles.textInput} placeholder={`medicion nº: ${item}`} keyboardType="numeric" onChangeText={(value) => setMedidas(parseInt(value))}/>
      )}
      keyExtractor={(item) => item}
    />
  );
};
