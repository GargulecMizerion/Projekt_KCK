import {StyleSheet, View} from 'react-native'
import React from 'react'

interface OptionsBarProps {
    left?: React.ReactNode,
    right?: React.ReactNode,
}

const OptionsBar: React.FC<OptionsBarProps> = ({left, right}) => {
    return (
        <View style={styles.main}>
            {left}
            {right}
        </View>
    )
}
export default OptionsBar
const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        alignItems: "center"
    }
})
