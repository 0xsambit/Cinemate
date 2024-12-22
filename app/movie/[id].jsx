import React, { useEffect, useState } from "react";
import {
    Text,
    Image,
    StyleSheet,
    ScrollView,
    View,
    Pressable,
    Linking,
} from "react-native";
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
    }, [id, type]);

    const handleWatchSite = () => {
        if (!movie?.title && !movie?.name) return;
        // For TV shows, use "name"; for movies, "title"
        const movieTitle = movie.title || movie.name;
        const url = `https://www.google.com/search?q=${encodeURIComponent(
            movieTitle
        )}+watch`;
        Linking.openURL(url);
    };

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
                    <Text style={styles.title}>
                        {movie.title || movie.name}
                    </Text>
                    <View>
                        <Text style={styles.sectionHeading}>
                            Movie Overview:
                        </Text>
                        <Text style={styles.overview}>{movie.overview}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.sectionHeading}>Release Date:</Text>
                        <Text style={styles.info}>
                            {movie.release_date || movie.first_air_date}
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.sectionHeading}>Rating:</Text>
                        <Text style={styles.info}>{movie.vote_average}</Text>
                    </View>
                    <Pressable style={styles.button} onPress={handleWatchSite}>
                        <Text style={styles.buttonText}>Watch Site</Text>
                    </Pressable>
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
        fontStyle: "italic",
    },
    overview: {
        fontSize: 18,
        textAlign: "justify",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 20,
        marginTop: 10,
    },
    sectionHeading: {
        fontFamily: "Poppins-Bold",
        fontSize: 20,
    },
    info: {
        fontFamily: "Poppins-Regular",
        fontSize: 18,
    },
    button: {
        backgroundColor: "#007AFF",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        alignSelf: "center",
        marginTop: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
    },
});
