import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';

const FavouritesScreen = props => {

    const favMeals = MEALS.filter((meal) => meal.id == 'm1' || meal.id == 'm2');

    return (
        <MealsList
            data={favMeals}
            navigation={props.navigation}
            componentName="Meal Details"
        />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavouritesScreen;