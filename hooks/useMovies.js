import { useState, useEffect } from "react";
import { Alert } from "react-native";

export default function useMovies() {
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
        popular();
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

    return {
        top,
        pop,
        now,
        searchText,
        setSearchText,
        searchResults,
        loading,
        handleSearch,
    };
}
