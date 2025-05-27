import {StyleSheet, View} from 'react-native'
import React from 'react'
import LibraryItem from "@/app/components/LibraryItem";

const libraryData = [
    {
        id: '1',
        image: require('../../assets/images/audi.jpg'),
        title: 'Playlista do auta',
        type: 'Playlista',
        author: 'SuperSłuchacz69'
    },
    {
        id: '2',
        image: require('../../assets/images/Rockst4r.jpg'),
        title: 'Rockst4r ',
        type: 'Album',
        author: 'White2115'
    },
    {
        id: '3',
        image: require('../../assets/images/maryla.jpg'),
        title: 'The best of Maryla Rodowicz',
        type: 'Playlista',
        author: 'Sonique'
    },
];

const LibraryList = () => {
    return (
        <View style={styles.main}>
            {libraryData.map((item) => (
                <LibraryItem key={item.id} title={item.title} author={item.author} type={item.type} image={item.image} />
            ))}
        </View>
    )
}
export default LibraryList
const styles = StyleSheet.create({
    main: {
        gap: 10,
        padding: 10,
        paddingHorizontal: 20
    }
})
