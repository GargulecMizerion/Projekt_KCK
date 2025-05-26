import {FlatList, StyleSheet, Text} from 'react-native'
import React from 'react'
import RecommendedCategoryItem from "@/app/components/RecommendedCategoryItem";

const recommendedData = [
    {id: '1', image: require('../../assets/images/liked.png'), title: 'Polubione'},
    {id: '2', image: require('../../assets/images/Rockst4r.jpg'), title: 'Rockst4r '},
    {id: '3', image: require('../../assets/images/piano.jpg'), title: 'Muzyka klasyczna'},
    {id: '4', image: require('../../assets/images/audi.jpg'), title: 'Muzyka do upalania audi'},
    {id: '5', image: require('../../assets/images/mc.jpg'), title: 'Minecraft soundtrack'},
    {id: '6', image: require('../../assets/images/maryla.jpg'), title: 'The best of Maryla Rodowicz'},
    {id: '6', image: require('../../assets/images/maryla.jpg'), title: 'The best of Maryla Rodowicz'},
    {id: '6', image: require('../../assets/images/maryla.jpg'), title: 'The best of Maryla Rodowicz'},
];


const RecommendedCategoriesList = () => {
    return (<>
            <Text style={styles.title}>Polecane kategorie</Text>
            <FlatList
                data={recommendedData}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <RecommendedCategoryItem image={item.image} title={item.title}/>
                )}
                numColumns={2}
                contentContainerStyle={styles.pinned}
                columnWrapperStyle={styles.columnWrapper}
            />
        </>
    )
}
export default RecommendedCategoriesList
const styles = StyleSheet.create({
    pinned: {
        paddingHorizontal: 20,
    },
    columnWrapper: {
        justifyContent: "space-between", // rozstawia kolumny na szerokość
        marginBottom: 15, // odstęp między rzędami
        gap: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
})
