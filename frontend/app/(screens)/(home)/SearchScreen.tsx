import {ScrollView, StyleSheet, View} from 'react-native'
import React from 'react'
import BackgroundComponent from "@/app/components/BackgroundComponent";
import HomeHeader from "@/app/components/HomeHeader";
import Line from "@/app/components/Line";
import SearchBar from "@/app/components/SearchBar";
import RecentSearchList from "@/app/components/RecentSearchList";
import RecommendedCategoriesList from "@/app/components/RecommendedCategoriesList";
import BottomPlayer from "@/app/components/BottomPlayer";

const SearchScreen = () => {
    return (
        <BackgroundComponent>
            <ScrollView style={styles.main}>
                <HomeHeader/>
                <Line/>
                <View style={styles.container}>
                    <SearchBar placeholder={"What do You want to listen to?"}/>
                </View>
                <Line/>
                <RecentSearchList/>
                <Line/>
                <RecommendedCategoriesList/>
            </ScrollView>
            <BottomPlayer/>
        </BackgroundComponent>
    )
}
export default SearchScreen
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        paddingHorizontal: 20
    }
})
