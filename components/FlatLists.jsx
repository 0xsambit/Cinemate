import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatLists = () => {
    return (
        <View>
            <Text>FlatLists</Text>
        </View>
    );
};

export default FlatLists;

const fetchMovies = async () => {
    try {
        const res = await fetch();
    } catch (error) {
        Alert.alert("Error", error);
    }
};

const styles = StyleSheet.create({});
