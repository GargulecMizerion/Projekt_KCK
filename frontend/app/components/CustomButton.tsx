import {Button, Dimensions, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


interface CustomButtonProps {
    title: string;
    color: string;
    textColor: string;
    pressEvent: () => void;
    icon?: string;
}

const {width} = Dimensions.get("window");

const CustomButton: React.FC<CustomButtonProps> = ({title, color, textColor, pressEvent, icon}) => {
    return (
        <TouchableOpacity style={{width: "100%"}} onPress={pressEvent}>
            <View style={{...styles.button, backgroundColor: color}}>
                <View style={{position: "absolute", left: 20}}>
                {
                    icon ? <Icon name={icon} color={textColor} size={20}/> : null
                }
                </View>
                <Text style={{...styles.textStyle, color: textColor}}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 18,
        color: "white",
    }
})