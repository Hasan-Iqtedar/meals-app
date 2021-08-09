import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity activeOpacity='0.7' style={ {...styles.gridItem, ...{backgroundColor: props.color,} } } onPress={props.onClick}>
            <View>
                <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 120,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 15,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 3
    },
    title: {
        fontSize: 22
    }
});

export default CategoryGridTile;