import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { Ionicons } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator();

function MealsNavigatorScreen() {
    return (
        <MealsNavigator.Navigator
            initialRouteName="Categories"
            screenOptions={
                {
                    headerTintColor: Colors.primaryColor,
                }
            }>

            <MealsNavigator.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{ title: 'Categories' }}
            />

            <MealsNavigator.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                options={({ route }) => ({
                    title: route.params.categoryTitle,
                })
                }
            />

            <MealsNavigator.Screen
                name="MealsDetails"
                component={MealDetailsScreen}
                options={
                    {
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                                <Item
                                    title='Favourite'
                                    iconName='ios-star'
                                    onPress={() => { console.log("lol") }
                                    }
                                />
                            </HeaderButtons>
                        )
                    }
                }
            />

        </MealsNavigator.Navigator>
    );
}


const bottomTab = createBottomTabNavigator();

export default function createBottomTab() {
    return (
        <bottomTab.Navigator
            screenOptions={
                {
                    headerShown: false,
                }
            }
        >
            <bottomTab.Screen
                name='allMeals'
                component={MealsNavigatorScreen}
                options = {
                    {
                        tabBarActiveTintColor: Colors.secondaryColor,
                        tabBarIcon: ({color, size}) => {
                            return (
                                <Ionicons name='ios-restaurant' size={size} color={color} />
                            )
                        }, 
                    }
                }
            />

            <bottomTab.Screen
                name='favourites'
                component={FavouritesScreen}
                options={
                    {
                        headerShown: true,
                        title: 'Favourites',
                        tabBarActiveTintColor: Colors.secondaryColor,
                        tabBarIcon: ({color, size}) => {
                            return (
                                <Ionicons name='ios-star' size={size} color={color} />
                            )
                        }
                    }
                }
            />

        </bottomTab.Navigator>
    );
}