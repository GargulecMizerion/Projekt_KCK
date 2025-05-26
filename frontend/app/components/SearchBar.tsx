import {StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/FontAwesome";

const SearchBar = () => {
    return (
        <View style={styles.main}>
            <Icon size={26} name={"search"}/>
            <TextInput placeholder={"What do You want to listen to?"}></TextInput>
        </View>
    )
}
export default SearchBar
const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        backgroundColor: "white",
        paddingHorizontal: 12,
        paddingVertical: 5,
        marginVertical: 12,
        borderRadius: 5,
        alignItems: "center",
        gap: 15
    },

})
