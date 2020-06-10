import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';


export default function ScreenPaso1() {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.screenTitle}>
                Completá los datos: Paso 2
            </Text>

            <TextInput
              placeholder="Superficie de parcela (Ha.)"
              style={globalStyles.textInput}
            />

            <TextInput
              placeholder="Porcentaje de Materia Seca"
              style={globalStyles.textInput}
            />

            <TextInput
              placeholder="Cantidad de Vacas"
              style={globalStyles.textInput}
            />

            <TextInput
              placeholder="Area del Cuadrante"
              style={globalStyles.textInput}
            />
        </View>
    );
}
