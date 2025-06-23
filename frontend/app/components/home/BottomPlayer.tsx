import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

const BottomPlayer = () => {
    return (
        <View style={{
            width: '100%',
            height: 50,
            backgroundColor: "black",
            position: "fixed",
            flexDirection: "row",
            gap: 7
        }}>
            <Image source={require('../../../assets/images/poolparty.jpg')} style={{width: 50, height: 50}}/>
            <View style={styles.info}>
                <Text style={[styles.text, styles.title]}>Pool Party</Text>
                <Text style={[styles.text, styles.author]}>Teenz</Text>
            </View>
            <View style={styles.buttons}>
                <Icon name={"backward"} color={"white"} size={25}/>
                <Icon name={"play"} color={"white"} size={25}/>
                <Icon name={"forward"} color={"white"} size={25}/>
            </View>
        </View>
    )
}
export default BottomPlayer
const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 50,
        backgroundColor: "black",
        position: "fixed",
        flexDirection: "row",
        gap: 7
    },
    info: {
        flex: 1,
    },
    text: {
        color: "white",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    author: {
        fontSize: 14,
    },
    buttons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }
})
