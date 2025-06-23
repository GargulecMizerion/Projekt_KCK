import {SafeAreaProvider} from "react-native-safe-area-context";
import WelcomeScreen from "./(screens)/WelcomeScreen";
import SignUpScreen from "@/app/(screens)/SignUpScreen";
import {createNativeStackNavigator} from "expo-router/build/fork/native-stack/createNativeStackNavigator";
import LogInScreen from "@/app/(screens)/LogInScreen";
import LoginFormScreen from "@/app/(screens)/LoginFormScreen";
import BottomTabNavigator from "@/app/(screens)/BottomTabNav";
import PlaylistScreen from "@/app/(screens)/PlaylistScreen";
import PlayerScreen from "@/app/(screens)/PlayerScreen";

type RootStackParamList = {
    Welcome: undefined;
    SignUp: undefined;
    SignIn: undefined;
    LoginFormScreen: undefined;
    HomeScreen: undefined;
    TabNav: undefined;
    Playlist: undefined;
    Player: undefined;
};

import { LogBox } from 'react-native';

// Ignoruj konkretny warning
LogBox.ignoreLogs([
    'VirtualizedLists should never be nested inside plain ScrollViews',
]);

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
                <Stack.Screen name="Playlist" component={PlaylistScreen}/>
                <Stack.Screen name="Player" component={PlayerScreen}/>
            </Stack.Navigator>
        </SafeAreaProvider>
    );
}
