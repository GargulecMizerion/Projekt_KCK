import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

interface PinnedItemProps {
    image: any;
    title: string;
}

const PinnedItem: React.FC<PinnedItemProps> = ({image, title}) => {
    return (
        <View style={styles.main}>
            <Image style={styles.imageStyle} source={image}/>
            <Text textBreakStrategy={"simple"} style={styles.titleStyle}>{title}</Text>
        </View>
    )
}
export default PinnedItem
const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        flexShrink: 1,
        height: 45,  // usuń lub zwiększ, by było miejsce na zawijanie
        width: '50%',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 5,
        gap: 5,
        alignItems: 'center',
    },
    imageStyle: {
        height: 45,
        width: 45,
        borderRadius: 5,
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: "bold",
        flexShrink: 1,
    }
})
