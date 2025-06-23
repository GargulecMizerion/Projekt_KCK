import {FlatList, StyleSheet, Text} from 'react-native'
import React from 'react'
import RecommendedCategoryItem from "@/app/components/home/RecommendedCategoryItem";
import {recommendedData} from "@/assets/Data";

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
