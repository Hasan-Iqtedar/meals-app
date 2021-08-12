import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HeaderButton from '../components/HeaderButton'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavouritesScreen from '../screens/FavouritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';

const addMarkAsFavourteButton = () => (
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item
            title='Favourite'
            iconName='ios-star'
            onPress={() => { console.log("lol") }
            }
        />
    </HeaderButtons>
);

const addHeaderMenuButton = (openMenu) => (
    <HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item
            title="Menu button"
            iconName='ios-menu'
            onPress={openMenu}
        />
    </HeaderButtons>
);

const defaultScreenOptions = {
    headerTintColor: Platform.OS == 'ios' ? Colors.primaryColor : 'white',
    headerStyle: {
        backgroundColor: Platform.OS == 'ios' ? 'white' : Colors.primaryColor,
    }
};


const MealsNavigatorStack = createStackNavigator();

function MealsNavigatorScreen({ navigation }) {
    return (
        <MealsNavigatorStack.Navigator
            initialRouteName="Categories"
            screenOptions={defaultScreenOptions}
        >

            <MealsNavigatorStack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'Categories',
                    headerLeft: addHeaderMenuButton.bind(this, () => navigation.toggleDrawer())
                }}
            />

            <MealsNavigatorStack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                options={({ route }) => ({
                    title: route.params.categoryTitle,
                })
                }
            />

            <MealsNavigatorStack.Screen
                name="MealDetails"
                component={MealDetailsScreen}
                options={ ({route}) => ({
                    title: route.params.meal.title,
                    headerRight: addMarkAsFavourteButton
                })}
            />

        </MealsNavigatorStack.Navigator>
    );
}


const FavouriteMealsStack = createStackNavigator();

function FavouriteMealsScreen() {
    return (
        <FavouriteMealsStack.Navigator
            screenOptions={defaultScreenOptions}
        >

            <FavouriteMealsStack.Screen
                name='Favourite Meals'
                component={FavouritesScreen}
            />

            <FavouriteMealsStack.Screen
                name='Meal Details'
                component={MealDetailsScreen}
                options={ ({route}) => ( {
                    headerTitle: route.params.meal.title,
                    headerRight: addMarkAsFavourteButton
                })}
            />

        </FavouriteMealsStack.Navigator>
    )
}


const BottomTab = createBottomTabNavigator();

function BottomTabScreen() {
    return (
        <BottomTab.Navigator
            screenOptions={{ headerShown: false, }}
        >
            <BottomTab.Screen
                name='allMeals'
                component={MealsNavigatorScreen}
                options={
                    {
                        tabBarLabel: 'All Meals',
                        tabBarActiveTintColor: Colors.secondaryColor,
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons name='ios-restaurant' size={size} color={color} />
                            )
                        },
                    }
                }
            />

            <BottomTab.Screen
                name='Favourites'
                component={FavouriteMealsScreen}
                options={
                    {
                        tabBarActiveTintColor: Colors.secondaryColor,
                        tabBarIcon: ({ color, size }) => {
                            return (
                                <Ionicons name='ios-star' size={size} color={color} />
                            )
                        }
                    }
                }
            />

        </BottomTab.Navigator>
    );
}


const FilterMealsStack = createStackNavigator();

function FilterMealsScreen({ navigation }) {
    return (
        <FilterMealsStack.Navigator screenOptions={defaultScreenOptions}>
            <FilterMealsStack.Screen name='filters' component={FiltersScreen}
                options={{
                    headerLeft: addHeaderMenuButton.bind(this, () => navigation.toggleDrawer()),
                    
                }}
            />
        </FilterMealsStack.Navigator>
    )
}


const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false, drawerLabelStyle: { color: Colors.primaryColor } }} >
            <Drawer.Screen name='all-Meals' component={BottomTabScreen}
                options={{
                    drawerLabel: 'Meals',
                }}
            />
            <Drawer.Screen name='Filters' component={FilterMealsScreen} />
        </Drawer.Navigator>
    )
}