import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'

const CustomButton = ({title, color, textColor, onPress}: {title: string, color: string, textColor: string, onPress: () => void  }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{...styles.button, backgroundColor: color}}>
                <Text style={{...styles.text, color: textColor}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default CustomButton
const styles = StyleSheet.create({
    button: {
        width: 350,
        height: 40,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 18,
        fontWeight: "bold"
    }
})
