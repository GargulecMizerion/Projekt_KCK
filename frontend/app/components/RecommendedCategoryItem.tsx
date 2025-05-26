import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

interface RecommendedCategoryItemProps {
    image: any;
    title: string;
}

const RecommendedCategoryItem: React.FC<RecommendedCategoryItemProps> = ({image, title}) => {
    return (
        <View style={styles.main}>
            <Text textBreakStrategy={"simple"} style={styles.titleStyle}>{title}</Text>
            <Image style={styles.imageStyle} source={image}/>
        </View>
    )
}
export default RecommendedCategoryItem
const styles = StyleSheet.create({
    main: {
        flexGrow: 1,
        flexShrink: 1,
        height: 80,  // usuń lub zwiększ, by było miejsce na zawijanie
        width: '50%',
        flexDirection: 'row',
        backgroundColor: 'black',
        gap: 5,
        padding: 8,
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    imageStyle: {
        height: 80,
        width: 80,
        transform: [
            { rotate: '30deg' },
            { translateY: 10 },
            { translateX: 10 },
            // liczba, bez cudzysłowu!
        ],
    },
    titleStyle: {
        fontSize: 14,
        flexShrink: 1,
        color: 'white',
    }
})
