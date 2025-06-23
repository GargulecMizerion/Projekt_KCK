import { ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import BackgroundComponent from '@/app/components/general/BackgroundComponent';
import HomeHeader from '@/app/components/home/HomeHeader';
import PinnedList from '@/app/components/home/PinnedList';
import HorizontalList from '@/app/components/home/HorizontalList';
import Line from '@/app/components/home/Line';
import BottomPlayer from '@/app/components/home/BottomPlayer';
import {
    choosenListData,
    newReleasesListData,
    recentListData
} from '@/assets/Data';
import { useNavigation } from 'expo-router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

const HomeScreen = () => {
    const navigation = useNavigation();
    const parentNavigation = navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <BackgroundComponent>
            <ScrollView>
                <HomeHeader />
                <Line />
                <PinnedList />
                <Line />
                <HorizontalList list={recentListData} title="Ostatnie" />
                <Line />
                <HorizontalList list={choosenListData} title="Wybrane dla Ciebie" />
                <Line />
                <HorizontalList list={newReleasesListData} title="Nowe wydania" />
            </ScrollView>
            <TouchableOpacity onPress={() => parentNavigation?.navigate("(screens)/PlayerScreen")}>
                <BottomPlayer />
            </TouchableOpacity>
        </BackgroundComponent>
    );
};

export default HomeScreen;
