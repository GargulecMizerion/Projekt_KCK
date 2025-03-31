import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import WelcomeComponent from '../components/WelcomeComponent'

const WelcomeScreen = () => {
  return (
    <View style={styles.view}>
        <LinearGradient
        colors={['#E6AF2E', '#FBFFFE']}
        start={{x: 0, y: 0}}
        end={{x:100, y:100}}
        style={{flex: 1, justifyContent:'center'}}
      >
        <WelcomeComponent/>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        view: {
            flex: 1,
            
        }
    }
)

export default WelcomeScreen