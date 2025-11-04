import { createContext, useContext, useState, useRef } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [currentSong, setCurrentSong] = useState(null);
    const audioRef = useRef(null);

    function playSong(song)  {
        setCurrentSong(song);
    }

    function closePlayer() {
        setCurrentSong(null);
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }

    return (
        <PlayerContext.Provider value={{ currentSong, playSong, closePlayer, audioRef }}>
            {children}
        </PlayerContext.Provider>
    );
}


export function usePlayer() {
    return useContext(PlayerContext);
}