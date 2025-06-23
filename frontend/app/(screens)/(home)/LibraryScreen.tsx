import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import BackgroundComponent from "@/app/components/general/BackgroundComponent";
import HomeHeader from "@/app/components/home/HomeHeader";
import Line from "@/app/components/home/Line";
import SearchBar from "@/app/components/home/SearchBar";
import Icon from "react-native-vector-icons/FontAwesome";
import OptionsBar from "@/app/components/home/OptionsBar";
import LibraryList from "@/app/components/home/LibraryList";
import BottomPlayer from "@/app/components/home/BottomPlayer";
import {libraryData} from "@/assets/Data";
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

const LibraryScreen = () => {
    const navigation = useNavigation();
    const parentNavigation = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <BackgroundComponent>
            <ScrollView>
                <HomeHeader title={"Twoja Biblioteka"}/>
                <Line/>
                <View style={styles.container}>
                    <SearchBar placeholder={"Search in library"}/>
                </View>
                <Line/>
                <View style={styles.container}>
                    <OptionsBar left={<Left/>} right={<Right/>}/>
                </View>
                <Line/>
                <LibraryList list={libraryData}/>
            </ScrollView>
            <TouchableOpacity onPress={() => parentNavigation?.navigate("(screens)/PlayerScreen")}>
                <BottomPlayer />
            </TouchableOpacity>
        </BackgroundComponent>
    )
}
export default LibraryScreen
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    sort: {
        flexDirection: "row",
        backgroundColor: "black",
        borderRadius: 100,
        padding: 4,
        paddingHorizontal: 15,
        gap: 8,
    },
    leftText: {
        color: "white",
    },
    right: {
        flexDirection: "row",
        gap: 15
    }
})

const Left = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => {
            }}>
                <View style={styles.sort}>
                    <Icon name={"sort"} size={20} color="white"/>
                    <Text style={styles.leftText}>Sortuj</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const Right = () => {
    return (
        <View style={styles.right}>
            <Icon name={"plus"} size={20} color="black"/>
            <Icon name={"list"} size={20} color="black"/>
        </View>
    )
}



