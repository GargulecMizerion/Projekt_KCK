import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import BackgroundComponent from "@/app/components/BackgroundComponent";
import HomeHeader from "@/app/components/HomeHeader";
import PinnedList from "@/app/components/PinnedList";
import HorizontalList from "@/app/components/HorizontalList";
import Line from "@/app/components/Line";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomPlayer from "@/app/components/BottomPlayer";


const HomeScreen = () => {
    return (
        <BackgroundComponent>
            <ScrollView>
                <HomeHeader/>
                <Line/>
                <PinnedList/>
                <Line/>
                <HorizontalList title={"Ostatnie"}/>
                <Line/>
                <HorizontalList title={"Wybrane dla Ciebie"}/>
                <Line/>
                <HorizontalList title={"Nowe wydania"}/>

            </ScrollView>
            <BottomPlayer/>

        </BackgroundComponent>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
