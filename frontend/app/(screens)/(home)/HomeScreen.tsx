import {FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import BackgroundComponent from "@/app/components/BackgroundComponent";
import PinnedComponent from "@/app/components/PinnedComponent";
import {Line} from "react-native-svg";
import {Colors} from "@expo/config-plugins/build/android";
import HomeHeader from "@/app/components/HomeHeader";


const pinnedData = [
    { id: '1', image: require('../../../assets/images/liked.png'), title: 'Polubione' },
    { id: '2', image: require('../../../assets/images/Rockst4r.jpg'), title: 'Rockst4r ' },
    { id: '3', image: require('../../../assets/images/piano.jpg'), title: 'Muzyka klasyczna' },
    { id: '4', image: require('../../../assets/images/audi.jpg'), title: 'Muzyka do upalania audi' },
    { id: '5', image: require('../../../assets/images/mc.jpg'), title: 'Minecraft soundtrack' },
    { id: '6', image: require('../../../assets/images/maryla.jpg'), title: 'The best of Maryla Rodowicz' },
];

const HomeScreen = () => {
    return (
        <BackgroundComponent>
            <View style={{ flex: 1 }}>
                <HomeHeader/>
                <Text style={styles.title}>Pinned</Text>
                <FlatList
                    data={pinnedData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <PinnedComponent image={item.image} title={item.title} />
                    )}
                    numColumns={2}
                    contentContainerStyle={styles.pinned}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </BackgroundComponent>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    pinned: {
        paddingHorizontal: 20,
    },
    columnWrapper: {
        justifyContent: "space-between", // rozstawia kolumny na szerokość
        marginBottom: 15, // odstęp między rzędami
        gap: 10,
        flex: 1
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
