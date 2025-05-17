import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WelcomeComponent from '../components/WelcomeComponent'
import CustomButton from "@/app/components/CustomButton";
import {navigate} from "expo-router/build/global-state/routing";
import {useNavigation} from "expo-router";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";

type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    SignIn: undefined;
};



const WelcomeScreen = () => {
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
                <CustomButton title={"Sign Up"} color={"#001514"} textColor={"#fff"} onPress={() => navigation.navigate("SignUp")
                }/>
                <CustomButton title={"Log In"} color={"#E6AF2E"} textColor={"#fff"} onPress={() => navigation.navigate("SignIn")}/>
            </View>
      </LinearGradient>
    </View>
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
            marginTop: 45
        }
    }
)

export default WelcomeScreen