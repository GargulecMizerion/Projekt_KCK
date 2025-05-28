import {StyleSheet, View} from 'react-native'
import React from 'react'
import LibraryItem from "@/app/components/LibraryItem";

interface LibraryItemData {
    id: string;
    title: string;
    author: string;
    type?: string;
    image: string;
}

interface LibraryListProps {
    list: LibraryItemData[];
}


const LibraryList: React.FC<LibraryListProps> = ({list}) => {
    return (
        <View style={styles.main}>
            {list.map((item) => (
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
