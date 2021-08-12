import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CategoryMeal from './categoryMeal';

const MealsList = props => {

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
                        name: props.componentName,
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
                data={props.data}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default MealsList;