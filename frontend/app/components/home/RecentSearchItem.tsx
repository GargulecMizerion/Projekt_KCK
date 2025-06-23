import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

interface RecentSearchItemProps {
    image: any,
    title: string,
}

const RecentSearchItem: React.FC<RecentSearchItemProps> = ({image, title}) => {
    return (
        <View style={styles.main}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>{title}</Text>
            <Icon name={"close"} style={styles.icon} size={20} />
        </View>
    )
}
export default RecentSearchItem
const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        width: "100%",
        height: 40,
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3
    },
    image: {
        width: 40,
        height: 40,
    },
    text: {
        flex: 1,
        textAlign: "left",
    },
    icon: {
        padding: 5
    }
})
