import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import React from 'react'
import BackgroundComponent from "@/app/components/general/BackgroundComponent";
import HomeHeader from "@/app/components/home/HomeHeader";
import Line from "@/app/components/home/Line";
import SearchBar from "@/app/components/home/SearchBar";
import RecentSearchList from "@/app/components/home/RecentSearchList";
import RecommendedCategoriesList from "@/app/components/home/RecommendedCategoriesList";
import BottomPlayer from "@/app/components/home/BottomPlayer";
import {useNavigation} from "expo-router";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    SignIn: undefined;
    LoginFormScreen: undefined;
    HomeScreen: undefined;
    TabNav: undefined;
    Playlist: undefined;
    Player: undefined;
    "(screens)/PlayerScreen": undefined;
};

const SearchScreen = () => {
    const navigation = useNavigation();
    const parentNavigation = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();
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
            <TouchableOpacity onPress={() => parentNavigation?.navigate("(screens)/PlayerScreen")}>
                <BottomPlayer />
            </TouchableOpacity>
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
