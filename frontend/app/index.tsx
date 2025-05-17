import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./(screens)/WelcomeScreen";
import SignUpScreen from "@/app/(screens)/SignUpScreen";
import {createNativeStackNavigator} from "expo-router/build/fork/native-stack/createNativeStackNavigator";
import LogInScreen from "@/app/(screens)/LogInScreen";

type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    SignIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {



    return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="SignIn" component={LogInScreen}/>
      </Stack.Navigator>
    </SafeAreaProvider>
    
  );
}
