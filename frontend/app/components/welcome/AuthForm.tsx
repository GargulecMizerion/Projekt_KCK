import {StyleSheet, Text, TextInput, View} from 'react-native'
import React from 'react'

interface CustomFormProps {
    title: string;
    information?: string;
}

const AuthForm: React.FC<CustomFormProps> = ({title, information}) => {
    const [isActive, setIsActive] = React.useState(false);
    return (
        <View style={styles.wrapper}>
            <Text style={styles.titleStyle}>{title}</Text>
            <TextInput style={[styles.inputStyle, isActive && {borderWidth: 1}]} onFocus={() => setIsActive(true)}
                       onBlur={() => setIsActive(false)}/>
            {
                information && <Text style={styles.informationStyle}>{information}</Text>
            }
        </View>
    )
}
export default AuthForm
const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20,
    },
    inputStyle: {
        backgroundColor: 'white',
        borderRadius: 5,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    informationStyle: {
        fontSize: 12,
    }
})
