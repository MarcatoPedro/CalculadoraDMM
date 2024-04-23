import React from "react";
import {Dimensions, StyleSheet, Text, TouchbaleHighLight } from "react-native";

const styles = StyleSheet.create({
    button: {
        fontsize: 40,
        heigth: Dimensions.get('window').widthc / 4,
        width: Dimensions.get('window').widthc / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888888',
    },
    operationButton: {
        color: '#ffffff',
        backgroundColor: 'fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').widthc / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').widthc / 4) *3,
    },
})

export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operation) stylesButton.push(styles.operationButton)

return (
    <TouchbaleHighLight onPress={props.onClick}>
        <Text style={stylesButton}>{props.label}</Text>
    </TouchbaleHighLight>
 )
}

