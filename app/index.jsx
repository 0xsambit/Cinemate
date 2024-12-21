import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import guy from "../assets/3dguy1.png";
import logo from "../assets/Cine.png";
import { Link } from "expo-router";

const Index = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={logo}
                resizeMode='contain'
                style={{ width: 200, height: 100 }}
            />
            <View style={styles.imgContainer}>
                <Image source={guy} style={styles.img} resizeMode='contain' />
            </View>
            <View style={styles.textContainer}>
                <Text style={{ fontFamily: "Poppins-SemiBold", fontSize: 30 }}>
                    Explore Movies
                </Text>
                <Text
                    style={{
                        fontFamily: "Poppins-Medium",
                        fontSize: 18,
                        textAlign: "center",
                    }}>
                    Discover new films, track and organize your favorite movies
                    in one place.
                </Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Link href='/home'>
                    <Text
                        style={{
                            fontSize: 20,
                            fontFamily: "Poppins-SemiBold",
                        }}>
                        Start tracking
                    </Text>
                </Link>
            </TouchableOpacity>
            <StatusBar style='light' backgroundColor='#000' />
        </SafeAreaView>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 20,
    },
    imgContainer: {
        alignItems: "center",
        width: "100%",
        height: 400,
    },
    img: {
        width: "80%",
        height: "80%",
    },
    textContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50,
        backgroundColor: "#43afff",
        marginTop: 20,
    },
});
