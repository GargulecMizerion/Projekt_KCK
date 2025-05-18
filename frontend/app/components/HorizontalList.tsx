import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import TileItem from "@/app/components/TileItem";

interface HorizontalListProps {
    title: string,
}

const HorizontalList: React.FC<HorizontalListProps> = ({title}) => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 20, paddingRight: 20,  boxSizing: "border-box"}}>
                <TileItem/>
                <TileItem/>
                <TileItem/>
                <TileItem/>
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
