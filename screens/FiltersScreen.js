import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton'
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch value={props.filter} onValueChange={props.onChange}
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS == 'ios' ? '' : Colors.primaryColor}
            />
        </View>
    )
}


const FiltersScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isVegan, setIsVegan] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            gultenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegetarian: isVegetarian,
            vegan: isVegan
        }

        console.log(appliedFilters);

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item
                        title='save'
                        iconName='ios-save'
                        onPress={saveFilters}
                    />
                </HeaderButtons>
            )
        })
    }, [saveFilters]);


    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters</Text>

            <FilterSwitch label='Gluten Free' filter={isGlutenFree} onChange={(newState) => setIsGlutenFree(newState)} />
            <FilterSwitch label='Lactose Free' filter={isLactoseFree} onChange={(newState) => setIsLactoseFree(newState)} />
            <FilterSwitch label='Vegetarian' filter={isVegetarian} onChange={(newState) => setIsVegetarian(newState)} />
            <FilterSwitch label='Vegan' filter={isVegan} onChange={(newState) => setIsVegan(newState)} />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    filterContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    }
});

export default FiltersScreen;