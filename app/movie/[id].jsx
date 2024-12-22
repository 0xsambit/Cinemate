import React, { useEffect, useState } from "react";
import { Text, Image, StyleSheet, ScrollView, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetails() {
    const { id, type } = useLocalSearchParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const endpoint =
                    type === "tv"
                        ? `https://api.themoviedb.org/3/tv/${id}?api_key=aca68f3adfdda6b1b6f31b91a60ffee2`
                        : `https://api.themoviedb.org/3/movie/${id}?api_key=aca68f3adfdda6b1b6f31b91a60ffee2`;
                const res = await fetch(endpoint);
                const data = await res.json();
                setMovie(data);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [id]);

    if (!movie) return <Text>Loading...</Text>;

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={styles.container}>
                <Image
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                    }}
                    style={styles.poster}
                    resizeMode='contain'
                />
                <View style={{ gap: 10 }}>
                    <Text style={styles.title}>{movie.title}</Text>
                    <View>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 20,
                            }}>
                            Movie Overview:
                        </Text>
                        <Text style={styles.overview}>{movie.overview}</Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: 20,
                        }}>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 20,
                            }}>
                            Release Date:
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-Regular",
                                fontSize: 18,
                            }}>
                            {movie.release_date}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 20,
                        }}>
                        <Text
                            style={{
                                fontFamily: "Poppins-Bold",
                                fontSize: 20,
                            }}>
                            Rating:
                        </Text>
                        <Text
                            style={{
                                fontFamily: "Poppins-Regular",
                                fontSize: 18,
                            }}>
                            {movie.vote_average}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
    },
    poster: {
        width: 300,
        height: 450,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        textShadowColor: "hsla(0, 0.00%, 48.60%, 0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 20,
        fontStyle: "italic",
    },
    overview: {
        fontSize: 18,
        textAlign: "justify",
    },
});
