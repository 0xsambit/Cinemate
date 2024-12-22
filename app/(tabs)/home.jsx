import {
    Alert,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../components/InputField";
import logo from "../../assets/Cine.png";
import FlatLists from "../../components/FlatLists";

const Home = () => {
    const [top, setTop] = useState([]);
    const [pop, setPop] = useState([]);
    const [now, setNow] = useState([]);

    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const topMovies = async () => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/top_rated?page=1&api_key=aca68f3adfdda6b1b6f31b91a60ffee2`
            );

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setTop(data.results.slice(0, 15));
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    };

    const popular = async () => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/popular?page=1&api_key=aca68f3adfdda6b1b6f31b91a60ffee2`
            );

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setPop(data.results.slice(0, 15));
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    };

    const nowPlaying = async () => {
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=aca68f3adfdda6b1b6f31b91a60ffee2`
            );

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setNow(data.results.slice(0, 15));
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        topMovies();
    }, []);

    useEffect(() => {
        popular();
    }, []);

    useEffect(() => {
        nowPlaying();
    }, []);

    const handleSearch = async () => {
        const query = searchText.trim();
        if (!query) {
            setLoading(false);
            return;
        }
        setLoading(true);
        try {
            const res = await fetch(
                `https://api.themoviedb.org/3/search/multi?api_key=aca68f3adfdda6b1b6f31b91a60ffee2&query=${query}`
            );

            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

            const data = await res.json();
            setSearchResults(data.results || []);
        } catch (error) {
            Alert.alert("Error", error.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image
                    source={logo}
                    resizeMode='contain'
                    style={{ width: 150, height: 80 }}
                />
                <InputField
                    searchText={searchText}
                    setSearchText={setSearchText}
                    handleSearch={handleSearch}
                />
                <Text style={styles.sectionTitle}>Search Results</Text>
                <FlatList
                    data={searchResults}
                    renderItem={({ item }) => <FlatLists item={item} />}
                    keyExtractor={(item) =>
                        item.id?.toString() ?? Math.random().toString()
                    }
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={
                        loading ? (
                            <Text>Searching...</Text>
                        ) : (
                            <Text style={{ textAlign: "center" }}>
                                No results found
                            </Text>
                        )
                    }
                />
                <Text style={styles.sectionTitle}>Top Movies of All Time</Text>
                <FlatList
                    data={top}
                    renderItem={({ item }) => <FlatLists item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={
                        loading ? (
                            <Text>Loading...</Text>
                        ) : (
                            <Text style={{ textAlign: "center" }}>
                                No movies found
                            </Text>
                        )
                    }
                />
                <Text style={styles.sectionTitle}>Popular Movies</Text>
                <FlatList
                    data={pop}
                    renderItem={({ item }) => <FlatLists item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={
                        loading ? (
                            <Text>Loading...</Text>
                        ) : (
                            <Text style={{ textAlign: "center" }}>
                                No movies found
                            </Text>
                        )
                    }
                />
                <Text style={styles.sectionTitle}>Now Playing</Text>
                <FlatList
                    data={now}
                    renderItem={({ item }) => <FlatLists item={item} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={
                        loading ? (
                            <Text>Loading...</Text>
                        ) : (
                            <Text style={{ textAlign: "center" }}>
                                No movies found
                            </Text>
                        )
                    }
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        fontFamily: "Poppins-Regular",
    },
    scrollContainer: {
        alignItems: "center",
        paddingVertical: 20,
    },
    sectionTitle: {
        fontWeight: "900",
        fontSize: 20,
        marginVertical: 20,
    },
});
