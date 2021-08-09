import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CategoryMeal from '../components/categoryMeal';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const { categoryId } = props.route.params;
    const category = CATEGORIES.find((item) => item.id === categoryId);
    const categoryMeals = MEALS.filter((item) => item.categoryIds.indexOf(categoryId) != -1);

    const renderMealItem = (data) => {
        return (
            <CategoryMeal
                title={data.item.title}
                duration={data.item.duration}
                complexity={data.item.complexity}
                affordability={data.item.affordability}
                imageURL={data.item.imageUrl}
                onClick={() => {
                    props.navigation.navigate({
                        name: 'MealsDetails',
                        params: {
                            meal: data.item,
                        }
                    })
                }}
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default CategoryMealsScreen;