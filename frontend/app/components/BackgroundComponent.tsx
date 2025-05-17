import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface BackgroundComponentProps {
    children: React.ReactNode;
}

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({ children }) => {
    return (
        <View style={styles.view}>
            <LinearGradient
                colors={['#E6AF2E', '#FBFFFE']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.gradient}
            >
                {children}
            </LinearGradient>
        </View>
    );
};

export default BackgroundComponent;

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
    },
});