import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../components/InputField";
import logo from "../../assets/Cine.png";
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollComponent}>
                <Image
                    source={logo}
                    resizeMode='contain'
                    style={{ width: 150, height: 150 }}
                />
                <InputField />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    scrollComponent: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
});
