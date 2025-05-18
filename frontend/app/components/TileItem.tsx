import {StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

const TileItem = () => {
    return (
        <View style={{marginRight: 20}}>
            <Image source={require('../../assets/images/Rockst4r.jpg')} style={styles.imageStyle}/>
            <Text style={styles.title}>Rockst4r</Text>
            <Text style={styles.author}>White2115</Text>
        </View>
    )
}
export default TileItem
const styles = StyleSheet.create({
    imageStyle: {
        width: 130,
        height: 130,
        borderRadius: 5,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    author: {
        fontSize: 14,
    }
})

