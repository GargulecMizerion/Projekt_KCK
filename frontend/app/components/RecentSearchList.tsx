import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import RecentSearchItem from "@/app/components/RecentSearchItem";

const recentData = [
    {id: '1', image: require('../../assets/images/liked.png'), title: 'Polubione'},
    {id: '2', image: require('../../assets/images/Rockst4r.jpg'), title: 'Rockst4r '},
    {id: '3', image: require('../../assets/images/piano.jpg'), title: 'Muzyka klasyczna'},
    {id: '4', image: require('../../assets/images/audi.jpg'), title: 'Muzyka do upalania audi'},
    {id: '5', image: require('../../assets/images/mc.jpg'), title: 'Minecraft soundtrack'},
    {id: '6', image: require('../../assets/images/maryla.jpg'), title: 'The best of Maryla Rodowicz'},
];


const RecentSearchList = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ostatnie</Text>
            {
                recentData.map((item, index) => (
                    <RecentSearchItem key={index} image={item.image} title={item.title} />
                ))
            }
        </View>
    )
}
export default RecentSearchList
const styles = StyleSheet.create({
    main: {
        paddingBottom: 10,
        paddingHorizontal: 20,
        gap: 3,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',

    }
})
