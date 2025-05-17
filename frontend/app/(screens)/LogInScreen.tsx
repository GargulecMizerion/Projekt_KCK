import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {LinearGradient} from "expo-linear-gradient";
import WelcomeComponent from "@/app/components/WelcomeComponent";
import CustomButton from "@/app/components/CustomButton";
import {useNavigation} from "expo-router";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type RootStackParamList = {
    LoginFormScreen: undefined;
    HomeScreen: undefined;
    TabNav: undefined;
};


const LogInScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.view}>
            <LinearGradient
                colors={['#E6AF2E', '#FBFFFE']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={{flex: 1, justifyContent: 'center'}}
            >
                <WelcomeComponent/>
                <View style={styles.center}>
                    <CustomButton title={"Continue with Email"} color={"#001514"} textColor={"#fff"}
                                  pressEvent={() => navigation.navigate("LoginFormScreen")} icon={"envelope"}/>
                    <CustomButton title={"Continue with Google"} color={"#E6AF2E"} textColor={"#fff"}
                                  pressEvent={() => navigation.navigate("TabNav")} icon={"google"}/>
                    <CustomButton title={"Continue with Facebook"} color={"#E6AF2E"} textColor={"#fff"}
                                  pressEvent={() => navigation.navigate("TabNav")} icon={"facebook"}/>
                </View>
            </LinearGradient>
        </View>
    )
}
export default LogInScreen
const styles = StyleSheet.create(
    {
        view: {
            flex: 1,
            width: '100%',
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 20,
            gap: 15,
            marginTop: 45,
            width: "100%",
        }
    }
)


