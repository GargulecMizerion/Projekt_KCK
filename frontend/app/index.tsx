import {SafeAreaProvider} from "react-native-safe-area-context";
import WelcomeScreen from "./(screens)/WelcomeScreen";
import SignUpScreen from "@/app/(screens)/SignUpScreen";
import {createNativeStackNavigator} from "expo-router/build/fork/native-stack/createNativeStackNavigator";
import LogInScreen from "@/app/(screens)/LogInScreen";
import LoginFormScreen from "@/app/(screens)/LoginFormScreen";
import BottomTabNavigator from "@/app/(screens)/BottomTabNav";

type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    SignIn: undefined;
    LoginFormScreen: undefined;
    HomeScreen: undefined;
    TabNav: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Index() {
    return (
        <SafeAreaProvider>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen}/>
                <Stack.Screen name="SignUp" component={SignUpScreen}/>
                <Stack.Screen name="SignIn" component={LogInScreen}/>
                <Stack.Screen name="LoginFormScreen" component={LoginFormScreen}/>
                <Stack.Screen name="TabNav" component={BottomTabNavigator}/>
                {/* Tutaj nawigacja Bottom Nav*/}
            </Stack.Navigator>
        </SafeAreaProvider>
    );
}
