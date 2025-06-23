import {FlatList, StyleSheet, Text} from 'react-native'
import React from 'react'
import PinnedItem from "@/app/components/home/PinnedItem";
import {pinnedData} from "@/assets/Data";
import {router, useNavigation} from "expo-router";
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
    "/(screens)/PlaylistScreen": undefined;
};


const PinnedList = () => {
    const navigation = useNavigation();
    const parentNavigation = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();

    const navigate = () => {
        router.navigate("/PlaylistScreen")
    }

    return (<>
            <Text style={styles.title}>Pinned</Text>
            <FlatList
                data={pinnedData}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <PinnedItem image={item.image} title={item.title} func={navigate} />
                )}
                numColumns={2}
                contentContainerStyle={styles.pinned}
                columnWrapperStyle={styles.columnWrapper}
            />
        </>
    )
}
export default PinnedList
const styles = StyleSheet.create({
    pinned: {
        paddingHorizontal: 20,
    },
    columnWrapper: {
        justifyContent: "space-between", // rozstawia kolumny na szerokość
        marginBottom: 15, // odstęp między rzędami
        gap: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
})
