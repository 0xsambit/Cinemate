import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../components/InputField";
import logo from "../../assets/Cine.png";
import FlatLists from "../../components/FlatLists";

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={logo}
                resizeMode='contain'
                style={{ width: 150, height: 80 }}
            />

            <InputField />
            <Text style={{ fontWeight: 900, fontSize: 20, marginVertical: 20 }}>
                Top Movies of All Time
            </Text>
            <FlatList
                data={""}
                renderItem={FlatLists}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "Poppins-Regular",
        margin: 0,
        padding: 0,
    },
    scrollComponent: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
});
