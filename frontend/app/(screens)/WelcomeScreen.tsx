import {StyleSheet, View} from 'react-native'
import React from 'react'
import WelcomeComponent from '../components/welcome/WelcomeComponent'
import CustomButton from "@/app/components/general/CustomButton";
import {useNavigation} from "expo-router";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import BackgroundComponent from "@/app/components/general/BackgroundComponent";

type RootStackParamList = {
    SignUp: undefined;
    SignIn: undefined;
};


const WelcomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <BackgroundComponent>
            <WelcomeComponent/>
            <View style={styles.center}>
                <CustomButton title={"Sign Up"} color={"#001514"} textColor={"#fff"}
                              pressEvent={() => navigation.navigate("SignUp")
                              }/>
                <CustomButton title={"Log In"} color={"#E6AF2E"} textColor={"#fff"}
                              pressEvent={() => navigation.navigate("SignIn")}/>
            </View>
        </BackgroundComponent>
    )
}

const styles = StyleSheet.create(
    {
        view: {
            flex: 1,
        },
        center: {
            justifyContent: 'center',
            alignItems: 'center',
            gap: 15,
            marginTop: 45,
            paddingHorizontal: 20,
        }
    }
)

export default WelcomeScreen