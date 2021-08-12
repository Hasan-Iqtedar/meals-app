import React from 'react';

import MealsList from '../components/MealsList';
import { MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params;
    const categoryMeals = MEALS.filter((item) => item.categoryIds.indexOf(categoryId) != -1);

    return (
        <MealsList 
        data={categoryMeals} 
        navigation={props.navigation} 
        componentName="MealDetails"
        />
    );
}

export default CategoryMealsScreen;