import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Line from "@/app/components/Line";

const HomeHeader = () => {
    return (
        <View style={styles.main}>
            <View style={styles.row}>
                <View>
                    <Text style={styles.text}>Witaj,</Text>
                    <Text style={styles.text}>SuperSłuchacz69</Text>
                </View>
                <View style={styles.profilePic}>
                    <Text style={{color: "white"}}>SS</Text>
                </View>
            </View>
        </View>
    )
}
export default HomeHeader
const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        paddingTop: 10,
        gap: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profilePic: {
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
    }
})
