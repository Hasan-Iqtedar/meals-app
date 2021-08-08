import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CategoryMeal from '../components/categoryMeal';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');
    const categoryMeals = MEALS.filter((item) => item.categoryIds.indexOf(catId) != -1);

    const renderMealItem = (data) => {
        return (
            <CategoryMeal
                title={data.item.title}
                duration={data.item.duration}
                complexity={data.item.complexity}
                affordability={data.item.affordability}
                imageURL={data.item.imageUrl}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <FlatList
                data={categoryMeals}
                renderItem={renderMealItem}
            />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {

    const catId = navigationData.navigation.getParam('categoryId');
    const category = CATEGORIES.find((item) => item.id === catId);

    return {
        headerTitle: category.title,
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default CategoryMealsScreen;