import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

const InputField = ({ searchText, setSearchText, handleSearch }) => {
    return (
        <View>
            <TextInput
                placeholder='Search movies by title'
                returnKeyType='search'
                style={styles.textInput}
                value={searchText}
                onChangeText={setSearchText}
                onSubmitEditing={handleSearch}
            />
        </View>
    );
};

export default InputField;

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#f9f9f9",
        borderRadius: 20,
        width: 350,
        fontSize: 16,
        paddingLeft: 20,
        borderColor: "black",
        borderWidth: 1,
    },
});
