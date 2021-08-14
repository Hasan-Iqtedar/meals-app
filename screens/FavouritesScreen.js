import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealsList from '../components/MealsList';

const FavouritesScreen = props => {

    const availableMeals = useSelector(state => state.meals.favouriteMeals)

    if (useSelector(state => state.meals.favouriteMeals).length == 0) {
        return (
            <View style={styles.text}>
                <Text>No Favourites found.</Text>
            </View>
        )
    }
    else {
        return (
            <MealsList
                data={availableMeals}
                navigation={props.navigation}
                componentName="Meal Details"
            />
        )
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default FavouritesScreen;