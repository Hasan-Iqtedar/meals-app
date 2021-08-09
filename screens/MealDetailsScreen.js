import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors';

const MealDetailsScreen = props => {

    const {meal} = props.route.params;

    return (
        <View style={styles.screen}>
            <View style={styles.mealDetailCard}>
                <Text style={styles.title}>{meal.title}</Text>

                <Text>{meal.ingredients}</Text>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        paddingTop: 40,
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: Colors.secondaryColor,
        marginBottom: 20,
    },
    mealDetailCard: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        height: '80%',
        backgroundColor: 'white',
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        shadowOpacity: 0.2,
        padding: 5
    }
});

export default MealDetailsScreen;