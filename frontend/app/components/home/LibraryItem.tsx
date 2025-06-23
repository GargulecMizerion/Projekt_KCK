import {StyleSheet, Image, View, Text} from 'react-native'
import React from 'react'

interface LibraryItemProps {
    image: any,
    title: string,
    type?: string,
    author: string,
}

const LibraryItem: React.FC<LibraryItemProps> = ({image, title, type, author}) => {
    return (
        <View style={styles.main}>
            <Image source={image} style={styles.image}/>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.info}>{type ? type + " - " : ""}{author}</Text>
            </View>
        </View>
    )
}
export default LibraryItem
const styles = StyleSheet.create({
    main: {
        width: '100%',
        flexDirection: "row",
        borderRadius: 5,
        height: 70,
        overflow: "hidden",
        gap: 10,
        backgroundColor: "white",
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 5,
    },
    container: {
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    info: {
        fontSize: 14,

    }
})
