import {StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

interface TileItemProps {
    image: any,
    title: string,
    author: string,
}

const TileItem: React.FC<TileItemProps> = ({image, title, author}) => {
    return (
        <View style={styles.main}>
            <Image source={image} style={styles.imageStyle}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
        </View>
    )
}
export default TileItem
const styles = StyleSheet.create({
    main: {
        marginRight: 20,
        width: 130,
        overflow: 'hidden',
    },
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

