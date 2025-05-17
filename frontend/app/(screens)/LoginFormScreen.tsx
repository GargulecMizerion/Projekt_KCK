import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import AuthForm from "@/app/components/AuthForm";
import BackgroundComponent from "@/app/components/BackgroundComponent";
import Icon from "react-native-vector-icons/FontAwesome";
import {router} from "expo-router";
import CustomButton from "@/app/components/CustomButton";

const LoginFormScreen = () => {
    return (
        <BackgroundComponent>
            <View style={styles.main}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.arrow} onPress={() => router.back()}>
                        <Icon name="arrow-left" color={"black"} size={18}/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Create account</Text>
                </View>
                <View style={styles.wrapper}>
                    <AuthForm title={"Email"}/>
                    <AuthForm title={"Password"} information={"Use at least 8 characters."}/>
                    <CustomButton title={"Next"} color={"#a7a7a7"} textColor={"Black"}
                                  pressEvent={() => router.navigate("/HomeScreen")}/>
                </View>
            </View>
        </BackgroundComponent>
    )
}
export default LoginFormScreen
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    header: {
        position: 'relative',
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        margin: 15,
        fontSize: 22,
    },
    arrow: {
        width: 30,
        height: 30,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 100,
    },
    text: {
        position: "absolute",
        left: 0,
        right: 0,
        textAlign: "center",
        fontSize: 20,
    },
    wrapper: {
        paddingHorizontal: 20,
    }
})
