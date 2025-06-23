import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import RecentSearchItem from "@/app/components/home/RecentSearchItem";
import {recentSearchData} from "@/assets/Data";

const RecentSearchList = () => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>Ostatnie</Text>
            {
                recentSearchData.map((item, index) => (
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
