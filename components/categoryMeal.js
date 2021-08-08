import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const CategoryMeal = props => {
    return (
        <TouchableOpacity style={styles.mealItem} activeOpacity='0.7'>
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground source={{ uri: props.imageURL }} style={styles.bgImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.footer}>
                    <Text>{props.duration}</Text>
                    <Text>{props.complexity}</Text>
                    <Text>{props.affordability}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: "lightgray",
        marginVertical: 10,
        borderRadius: 10,
        overflow: 'hidden',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    header: {
        height: '85%',
        flexDirection: 'row',
        marginBottom: 5
    },
    footer: {
        marginVertical: 0,
        height: '15%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    titleContainer: {
        padding: 5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white'
    },

});

export default CategoryMeal;