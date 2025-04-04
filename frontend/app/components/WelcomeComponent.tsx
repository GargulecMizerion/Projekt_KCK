import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'


const WelcomeComponent = () => {
  return (
    <View style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
         <Image 
            source={require('../../assets/images/logo.png')} 
            style={{width: 100, height: 100}} 
        />
        
        <Text style={styles.title}>Millions of Songs.</Text>
        <Text style={styles.title}>Free on Sonique.</Text>
        <CustomButton title='Sign In' color='white'></CustomButton>
    </View>
  )
}

export default WelcomeComponent

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "center",
    },

    
})