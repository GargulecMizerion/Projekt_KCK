import {Tabs} from 'expo-router';

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name="HomeScreen"
                options={{title: 'HOME', tabBarIcon: () => null}}
            />
            <Tabs.Screen
                name="SearchScreen"
                options={{title: 'WYSZUKAJ', tabBarIcon: () => null}}
            />
            <Tabs.Screen
                name="LibraryScreen"
                options={{title: 'BIBLIOTEKA', tabBarIcon: () => null}}
            />
            <Tabs.Screen
                name="SettingsScreen"
                options={{title: 'USTAWIENIA', tabBarIcon: () => null}}
            />

        </Tabs>
    );
}