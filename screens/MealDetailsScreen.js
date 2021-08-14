import React, { useLayoutEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton'
import { toggleFavourite } from '../store/actions/meals';
import Colors from '../constants/Colors';

const ListItem = props => {
    return (
        <View style={styles.listItem}>
            <Text >{props.children}</Text>
        </View>
    )
}

const MealDetailsScreen = props => {

    const { meal } = props.route.params;

    const dispatchAction = useDispatch();

    const toggleFavuriteActionHandler = useCallback(() => {
        dispatchAction(toggleFavourite(meal.id));
    }, [dispatchAction, meal.id])

    const isFav = useSelector(state => state.meals.favouriteMeals).some(favmeal => favmeal.id == meal.id)

    useLayoutEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton} >
                    <Item
                        title='Favourite'
                        iconName={ isFav ? 'ios-star' : 'ios-star-outline'}
                        onPress={toggleFavuriteActionHandler}
                    />
                </HeaderButtons>
            )
        })

    }, [toggleFavuriteActionHandler, isFav]);

    return (

        <ScrollView >
            <View style={styles.screen}>

                <View style={styles.container} >
                    <Image source={{ uri: meal.imageUrl }} style={styles.image} />

                    <View style={styles.highlights} >
                        <Text> {meal.duration} </Text>
                        <Text> {meal.complexity} </Text>
                        <Text> {meal.affordability} </Text>
                    </View>
                </View>

                <Text style={styles.maintitle}> {meal.title} </Text>

                <Text style={styles.title} > Ingredients </Text>
                {meal.ingredients.map(ingredient => (<ListItem key={ingredient} style={styles.listItem} > {ingredient} </ListItem>))}


                <Text style={styles.title}> Steps </Text>
                {meal.steps.map(step => (<ListItem key={step} style={styles.listItem} > {step} </ListItem>))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        paddingTop: 40,
        flex: 1,
        backgroundColor: 'white'
    },
    maintitle: {
        fontSize: 20,
        color: Colors.secondaryColor,
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    container: {
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        overflow: 'hidden',
        width: '100%',
        height: 220
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: 'bold'
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
    },
    image: {
        width: '100%',
        height: 200
    },
    highlights: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'lightgray'
    },
    listItem: {
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 3,
        justifyContent: 'center',
        backgroundColor: 'white'
    }

});

export default MealDetailsScreen;