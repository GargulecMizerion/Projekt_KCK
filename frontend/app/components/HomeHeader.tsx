import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

interface HomeHeaderProps {
    title?: string
}

const HomeHeader: React.FC<HomeHeaderProps> = ({title}) => {
    return (
        <View style={styles.main}>
            <View style={styles.row}>
                <View>
                    {
                        title ? <Text style={{...styles.text, lineHeight: 72}}>{title}</Text> :
                            <>
                                <Text style={styles.text}>Witaj,</Text>
                                <Text style={styles.text}>SuperSłuchacz69</Text>
                            </>
                    }

                </View>
                <View style={styles.profilePic}>
                    <Text style={{color: "white"}}>SS</Text>
                </View>
            </View>
        </View>
    )
}
export default HomeHeader
const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 20,
        paddingTop: 10,
        gap: 10
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profilePic: {
        width: 36,
        height: 36,
        borderRadius: 100,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        lineHeight: 36,
        fontSize: 30,
        fontWeight: "bold",
    }
})
