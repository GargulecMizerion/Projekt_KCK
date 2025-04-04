import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    title: string;
    color: string
    //icon:
}

const {width} = Dimensions.get("window");

const CustomButton: React.FC<CustomButtonProps> = ({title, color}) => {
  return (
    <View style={{...(styles.button), backgroundColor: color}} >
        <TouchableOpacity style={{flex: 1}}>
            <Text>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        width: width * 0.8,
        height: 50,
        padding: 10,
        margin: 10
    }
})