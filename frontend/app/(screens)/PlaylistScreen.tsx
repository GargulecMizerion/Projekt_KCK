import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, Dimensions, View} from 'react-native'
import React from 'react'
import BackgroundComponent from "@/app/components/general/BackgroundComponent";
import {router} from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import Line from "@/app/components/home/Line";
import OptionsBar from "@/app/components/home/OptionsBar";
import LibraryList from "@/app/components/home/LibraryList";

const PlaylistScreen = () => {
    const width = Dimensions.get('window').width;
    return (
        <BackgroundComponent>
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.arrow} onPress={() => router.back()}>
                        <Icon name="arrow-left" color={"black"} size={18}/>
                    </TouchableOpacity>
                    <Image source={require("D:\\Studia\\sonique\\Projekt_KCK\\frontend\\assets\\images\\maryla.jpg")} style={{...styles.image, width: width * 0.6, height: width * 0.6}}/>
                    <View style={styles.info}>
                        <Text style={styles.title}>Playlista do auta</Text>
                        <View style={styles.creator}>
                            <View style={styles.profilePic}>
                                <Text style={{color: "white"}}>SS</Text>
                            </View>
                            <Text style={styles.creatorName}>SuperSłuchacz69</Text>
                        </View>
                    </View>
                </View>
                <Line/>
                <View style={{paddingHorizontal: 20}}>
                    <OptionsBar left={<Left/>} right={<Right/>}/>
                </View>
                <Line/>
                <LibraryList list={playlistData}/>
            </ScrollView>
        </BackgroundComponent>
    )
}
export default PlaylistScreen
const styles = StyleSheet.create({
    arrow: {
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 100,
        position: "absolute",
        left: 15,
        top: 15,
    },
    container: {
        flex: 1,
    },
    header: {
        position: "relative",
        padding: 20,
        width: "100%",
        marginTop: 10,
        alignItems: "center"
    },
    image: {
        borderRadius: 5,
        marginBottom: 20,
    },
    info: {
        width: "100%",
        gap: 10
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
    },
    creator: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    profilePic: {
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    creatorName: {
        fontSize: 18,
        fontWeight: "bold",
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
        <View style={{flexDirection: "row", gap: 10, alignItems: "center"}}>
            <Icon name={"plus"} size={20} color="black"/>
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

            <Icon name={"play"} size={20} color="black"/>
        </View>
    )
}

const playlistData = [
    {
        id: '1',
        image: require('../../assets/images/audi.jpg'),
        title: 'Wodospady',
        author: 'Popek'
    },
    {
        id: '2',
        image: require('../../assets/images/Rockst4r.jpg'),
        title: 'Rockst4r',
        author: 'White2115'
    },
    {
        id: '3',
        image: require('../../assets/images/maryla.jpg'),
        title: 'PoolParty',
        author: 'Teenz'
    },
    {
        id: '4',
        image: require('../../assets/images/maryla.jpg'),
        title: 'Genziara',
        author: 'Genzie'
    },
    {
        id: '5',
        image: require('../../assets/images/maryla.jpg'),
        title: 'PoolParty',
        author: 'Teenz'
    },
    {
        id: '6',
        image: require('../../assets/images/maryla.jpg'),
        title: 'PoolParty',
        author: 'Teenz'
    },
];
