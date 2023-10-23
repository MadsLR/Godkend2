import {StyleSheet, Text, View} from "react-native";
import * as React from "react";

//Her oprettes en komponent, som returnerer en tekstkomponent med teksten "Home"
function InfoScreen({prop}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prop}</Text>
        </View>
    );
}

export default InfoScreen

//CSS styling til brug i komponenten
const styles = StyleSheet.create({
    container: {
        borderColor: 'green',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },
    text: {
        fontSize: 20,
    },
});