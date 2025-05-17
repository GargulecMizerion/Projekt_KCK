import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import WelcomeComponent from "@/app/components/WelcomeComponent";
import CustomButton from "@/app/components/CustomButton";
import {LinearGradient} from "expo-linear-gradient";
import {router, useNavigation} from "expo-router";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import BackgroundComponent from "@/app/components/BackgroundComponent";

type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    SignIn: undefined;
    LoginForm: undefined;
    TabNav: undefined;
};


const SignUpScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <BackgroundComponent>
            <WelcomeComponent/>
            <View style={styles.center}>
                <CustomButton title={"Continue with Email"} color={"#001514"} textColor={"#fff"}
                              pressEvent={() => navigation.navigate("LoginForm")}/>
                <CustomButton title={"Continue with Google"} color={"#E6AF2E"} textColor={"#fff"}
                              pressEvent={() => router.replace("/(screens)/(home)/HomeScreen")}/>
                <CustomButton title={"Continue with Facebook"} color={"#E6AF2E"} textColor={"#fff"}
                              pressEvent={() => router.replace("/(screens)/(home)/HomeScreen")}/>
            </View>
        </BackgroundComponent>
    )
}
export default SignUpScreen
const styles = StyleSheet.create(
    {
        view: {
            flex: 1,
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
