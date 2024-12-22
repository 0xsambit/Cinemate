import { FlatList, Image, ScrollView, StyleSheet, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../components/InputField";
import logo from "../../assets/Cine.png";
import FlatLists from "../../components/FlatLists";
import useMovies from "../../hooks/useMovies";

const Home = () => {
    const {
        top,
        pop,
        now,
        searchText,
        setSearchText,
        searchResults,
        loading,
        handleSearch,
    } = useMovies();

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
