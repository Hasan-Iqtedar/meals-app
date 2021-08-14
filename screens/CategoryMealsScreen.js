import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';

import MealsList from '../components/MealsList';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params;
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const categoryMeals = availableMeals.filter((item) => item.categoryIds.indexOf(categoryId) != -1);

    if (categoryMeals.length == 0) {
        return (
            <View style={styles.text}>
                <Text>No meals. Maybe check your filters!</Text>
            </View>
        )
    }
    else {
        return (
            <MealsList
                data={categoryMeals}
                navigation={props.navigation}
                componentName="MealDetails"
            />
        );
    }
}

const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default CategoryMealsScreen;