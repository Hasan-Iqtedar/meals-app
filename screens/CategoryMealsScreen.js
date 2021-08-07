import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { CATEGORIES } from '../data/dummy-data';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>CategoryMealsScreen</Text>
            <Button title="Go to Meal Details" onPress={() => {
                props.navigation.navigate({ routeName: 'MealsDetails' });
            }} />
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
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;