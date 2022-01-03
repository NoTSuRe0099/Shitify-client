import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MusicList from "./Pages/MusicListComponent/MusicList";
import Dashboard from "./layout/DashboardComponent/Dashboard";
import MusicPlayer from "./layout/PlayerComponent/MusicPlayer";
import { Data as initialData } from "./Data";
import { playlistContext } from "./playlistContext";
import axios from "axios";

const App = () => {
    const [currentSong, setCurrentSong] = useState({});
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [Data, setData] = useState(initialData);
    const [likedSongs, setLikedSongs] = useState([]);

    useEffect(() => {
        axios.get("/api/v1/songs").then((res) => {
            setData(res.data);
        });
    }, []);

    const handleLikedSong = (index) => {
        let newData = [...Data];
        newData[index].isSaved = !newData[index].isSaved;
        setData(newData);
    };

    useEffect(() => {
        let savedSongs = Data.filter((data) => data.isSaved === true);
        setLikedSongs(savedSongs);
    }, [Data]);

    return (
        <>
            <Router>
                <playlistContext.Provider
                    value={{
                        Data,
                        currentSong,
                        setCurrentSong,
                        currentSongIndex,
                        setData,
                        setCurrentSongIndex,
                        handleLikedSong,
                    }}
                >
                    <Dashboard />
                    <Routes>
                        <Route path="/" exact element={<MusicList />} />
                    </Routes>
                    <MusicPlayer />
                </playlistContext.Provider>
            </Router>
        </>
    );
};

export default App;
