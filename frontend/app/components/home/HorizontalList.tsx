import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import TileItem from "@/app/components/home/TileItem";

interface TileProps {
    image: any,
    title: string,
    author: string,
}

interface HorizontalListProps {
    list: TileProps[],
    title: string,
}

const HorizontalList: React.FC<HorizontalListProps> = ({list, title}) => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 20, paddingRight: 20,  boxSizing: "border-box"}}>
                {
                    list.map((item, index) => (
                        <TileItem image={item.image} title={item.title} author={item.author} key={index} />
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default HorizontalList
const styles = StyleSheet.create({
    main: {
        marginBottom: 15
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
})
