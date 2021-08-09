import React from 'react';
import { StyleSheet, FlatList, } from 'react-native';

import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    const renderCategoryItem = (data) => {
        return (
            <CategoryGridTile title={data.item.title} color={data.item.color} onClick={() => {
                props.navigation.navigate({
                    name: 'CategoryMeals',
                    params: {
                        categoryId: data.item.id,
                        categoryTitle: data.item.title,
                    }
                });
            }}
            />
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            numColumns='2'
        />

    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;