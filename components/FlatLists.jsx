import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const FlatLists = ({ item }) => {
    const { title, vote_average, poster_path } = item;

    const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <View style={styles.item}>
            <Link
                href={
                    item.media_type === "tv"
                        ? `/movie/${item.id}?type=tv`
                        : `/movie/${item.id}?type=movie`
                }>
                <Image
                    source={{ uri: imageUrl }}
                    style={styles.image}
                    resizeMode='contain'
                />
            </Link>
            <Text style={styles.title}>{title}</Text>
            <Text
                style={{
                    textAlign: "center",
                    fontWeight: 900,
                    fontSize: 16,
                    marginBottom: 10,
                }}>
                Rating: {vote_average}
            </Text>
        </View>
    );
};

export default FlatLists;

const styles = StyleSheet.create({
    item: {
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 10,
        width: 200,
    },
    image: {
        width: 200,
        height: 250,
    },
    title: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 16,
        textAlign: "center",
        marginHorizontal: 10,
    },
});
