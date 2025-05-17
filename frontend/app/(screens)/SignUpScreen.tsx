import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import WelcomeComponent from "@/app/components/WelcomeComponent";
import CustomButton from "@/app/components/CustomButton";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "expo-router";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    SignIn: undefined;
};


const SignUpScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <View style={styles.view}>
            <LinearGradient
                colors={['#E6AF2E', '#FBFFFE']}
                start={{x: 0, y: 0}}
                end={{x:1, y:1}}
                style={{flex: 1, justifyContent:'center'}}
            >
                <WelcomeComponent/>
                <View style={styles.center}>
                    <CustomButton title={"Continue with Email"} color={"#001514"} textColor={"#fff"} onPress={() => navigation.navigate("")}/>
                    <CustomButton title={"Continue with Google"} color={"#E6AF2E"} textColor={"#fff"} onPress={() => navigation.navigate("")}/>
                    <CustomButton title={"Continue with Facebook"} color={"#E6AF2E"} textColor={"#fff"} onPress={() => navigation.navigate("")}/>
                </View>
            </LinearGradient>
        </View>
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
            gap: 15,
            marginTop: 45
        }
    }
)
