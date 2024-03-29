import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { playlistContext } from "../../playlistContext";
import Card from "./CardComponent/Card";
// import { Data as initialData } from '../../Data'
import "./list.css";

const MusicList = () => {
    const { Data, currentSongIndex, setData } = useContext(playlistContext);
    const navigate = useNavigate();

    // useEffect(() => {
    //     let halow = [...initialData];
    //     for (let i = 0; i < halow.length; i++) {
    //         if (i !== currentSongIndex) {
    //             halow[i].isPlaying = false;
    //         } else {
    //             halow[currentSongIndex].isPlaying = true;
    //         }
    //     }
    //     setData(halow);
    // }, [currentSongIndex, setData]);

    let cards = Data.map((data, index) => (
        <Card key={index} song={data} songNumber={index + 1} />
    ));

    return (
        <div
            className="relative bg-secondary text-white overflow-auto w-full"
            id="list"
        >
            <div className="page-background "></div>

            <div className="absolute left-0 top-0 w-full">
                <div className="flex main-container my-5 ">
                    <button
                        onClick={() => navigate("/")}
                        className="bg-black opacity-80 w-8 h-8 rounded-full justify-center items-center flex mr-3"
                    >
                        <i className="bx bx-chevron-left text-2xl"></i>
                    </button>
                    <button className="bg-black opacity-50 w-8 h-8 rounded-full justify-center items-center flex">
                        <i className="bx bx-chevron-right text-2xl"></i>
                    </button>
                </div>

                <header className="flex main-container mx-auto items-end my-10 ">
                    <div className="w-56 shadow-2xl mr-5">
                        <img src={Data[currentSongIndex].image} alt="" />
                    </div>

                    <div className="">
                        <h3 className="font-bold text-xs">PLAYLIST</h3>
                        <h1 className="font-bold text-8xl">Name Of Playlist</h1>
                        <h4>
                            {Data[currentSongIndex].name},
                            {Data[currentSongIndex].artist}...
                        </h4>
                    </div>
                </header>

                <div className="w-full min-h-full ">
                    <div className="main-container my-4">
                        <div className="flex items-center my-10">
                            <button className=" rounded-full w-14 h-14 bg-green-500 flex items-center justify-center play-btn">
                                <i className="bx bx-play text-4xl ml-1"></i>
                            </button>
                            <button className="text-3xl mx-5">
                                <i className="bx bx-heart"></i>
                            </button>
                            <button className="text-2xl tracking-widest mb-5">
                                ...
                            </button>
                        </div>
                    </div>

                    <div className="music-list main-container">
                        <div className="navigation text-xs font-semibold text-gray-300 my-1">
                            <span className="mx-auto text-lg">#</span>
                            <div>TITLE</div>
                            <div>ARTIST'S</div>
                            <div>DATE ADDED</div>
                            <div className="mx-auto text-xl">
                                <i className="bx bx-time"></i>
                            </div>
                        </div>
                        <div className=" h-px w-full bg-gray-600 opacity-3 mb-3"></div>
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicList;
