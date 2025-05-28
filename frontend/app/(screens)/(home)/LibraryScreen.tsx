import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import BackgroundComponent from "@/app/components/BackgroundComponent";
import HomeHeader from "@/app/components/HomeHeader";
import Line from "@/app/components/Line";
import SearchBar from "@/app/components/SearchBar";
import Icon from "react-native-vector-icons/FontAwesome";
import OptionsBar from "@/app/components/OptionsBar";
import LibraryList from "@/app/components/LibraryList";
import BottomPlayer from "@/app/components/BottomPlayer";

const LibraryScreen = () => {
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
            <BottomPlayer/>
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

const libraryData = [
    {
        id: '1',
        image: require('../../../assets/images/audi.jpg'),
        title: 'Playlista do auta',
        type: 'Playlista',
        author: 'SuperSłuchacz69'
    },
    {
        id: '2',
        image: require('../../../assets/images/Rockst4r.jpg'),
        title: 'Rockst4r ',
        type: 'Album',
        author: 'White2115'
    },
    {
        id: '3',
        image: require('../../../assets/images/maryla.jpg'),
        title: 'The best of Maryla Rodowicz',
        type: 'Playlista',
        author: 'Sonique'
    },
];


