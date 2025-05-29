import React from 'react';
import {View, Image, StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import BackgroundComponent from "@/app/components/BackgroundComponent";
import {router} from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const PlayerScreen = () => {
    const height = Dimensions.get("window").height;
    const imageHeight = height * 0.5;

    return (
        <BackgroundComponent>
            <View style={styles.main}>
                <View>
                    <TouchableOpacity style={styles.arrow} onPress={() => router.back()}>
                        <Icon name="arrow-left" color={"black"} size={18}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Rockst4r</Text>
                    <Image
                        style={{...styles.image, height: imageHeight}}
                        source={require('../../assets/images/Rockst4r.jpg')}
                        resizeMode="cover"
                    />

                    {/* Górny cień */}
                    <LinearGradient
                        colors={['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.5)', 'transparent']}
                        locations={[0.2, 0.7, 1]}
                        style={[styles.shadow, {top: 0}]}
                    />

                    {/* Dolny cień */}
                    <LinearGradient
                        colors={['transparent', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.9)']}
                        locations={[0, 0.3, 1]}
                        style={[styles.shadow, {bottom: 0}]}
                    />
                </View>

                <View style={styles.navi}>
                    <View style={styles.buttons}>
                        <View style={styles.top}>
                            <Icon name={"thumbs-up"} size={45} color={"white"}/>
                        </View>
                        <View style={styles.middle}>
                            <Icon name={"backward"} size={45} color={"white"}/>
                            <View style={styles.playBackground}>
                                <Icon name={"play"} size={45} color={"white"}/>
                            </View>
                            <Icon name={"forward"} size={45} color={"white"}/>
                        </View>
                        <View style={styles.bottom}>
                            <Icon name={"share"} size={45} color={"white"}/>
                        </View>
                    </View>
                </View>
            </View>
        </BackgroundComponent>
    );
};

export default PlayerScreen;

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    arrow: {
        position: "absolute",
        zIndex: 100,
        top: 20,
        left: 20,
    },
    title: {
        position: 'absolute',
        width: '70%',
        left: "15%",
        textAlign: 'center',
        top: 20,
        zIndex: 100,
        fontWeight: 'bold',
        fontSize: 23,
    },
    image: {
        aspectRatio: 1,
    },
    shadow: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 90,
        zIndex: 10,
    },
    navi: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttons: {
        width: "80%",
        aspectRatio: 1,
        backgroundColor: "#E6AF2E",
        borderRadius: "100%"
    },
    top: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    middle: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center"
    },
    bottom: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    playBackground: {
        aspectRatio: 1,
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: "100%"
    }
});
