import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
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
    "(screens)/PlaylistScreen": undefined;
};

const SettingsScreen = () => {
    const navigation = useNavigation();
    const parentNavigation = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View>
            <Text>SettingsScreen</Text>
            <TouchableOpacity onPress={() => parentNavigation?.navigate("(screens)/PlayerScreen")}>
                <BottomPlayer />
            </TouchableOpacity>
        </View>
    )
}
export default SettingsScreen
const styles = StyleSheet.create({})
