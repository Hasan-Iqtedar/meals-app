import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoriesScreen = props => {

    const renderCategoryItem = (data) => {
        return (
            <TouchableOpacity style={styles.gridItem} onPress={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: data.item.id,
                    }
                });
            }}
            >
                <View>
                    <Text> {data.item.title} </Text>
                </View>
            </TouchableOpacity>
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

CategoriesScreen.navigationOptions = {
    headerTitle: 'Categories',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 10,
        height: 120,
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoriesScreen;