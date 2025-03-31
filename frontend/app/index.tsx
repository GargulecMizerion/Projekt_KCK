import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import WelcomeScreen from "./(screens)/WelcomeScreen";

const Stack = createStackNavigator();

export default function Index() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      </Stack.Navigator>
    </SafeAreaProvider>
    
  );
}
