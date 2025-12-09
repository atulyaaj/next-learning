import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import formatDuration from "../utils/format-duration";

interface Song {
    id: number;
    title: string;
    artist: string;
    duration: number;
    cover: string;
    url: string;
    isFavorite: boolean;
}

interface Props extends Song {
    songs: Song[];
    setSongs: Dispatch<SetStateAction<Song[]>>;
    currentSong: number | null;
    setCurrentSong: Dispatch<SetStateAction<number | null>>;
}

export default function MusicComponent(props: Props) {
    const { id, title, artist, duration, cover, url, isFavorite, songs, setSongs, currentSong, setCurrentSong } = props;

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [currentTime, setCurrentTime] = useState(0);

    // Update audio time
    useEffect(() => {
        if (!audioRef.current) return;

        const interval = setInterval(() => {
            setCurrentTime(audioRef.current!.currentTime);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // Stop this audio if it's not the currently playing song
    useEffect(() => {
        if (!audioRef.current) return;

        if (currentSong !== id) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [currentSong]);

    const playHandler = () => {
        setCurrentSong(id); // mark as active song

        if (!audioRef.current) return;

        audioRef.current.src = url;
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const pauseHandler = () => {
        audioRef.current?.pause();
    };

    const stopHandler = () => {
        if (!audioRef.current) return;

        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setCurrentTime(0);
    };

    // Favorite
    const toggleFavorite = () => {
        setSongs(prev =>
            prev.map(s =>
                s.id === id ? { ...s, isFavorite: !s.isFavorite } : s
            )
        );
    };

    // Remove Song
    const removeSong = () => {
        setSongs(prev => prev.filter(s => s.id !== id));
        stopHandler();
    };

    return (
        <div
            style={{
                display: "flex",
                fontFamily: "Inter, sans-serif",
                backgroundColor: "#f2f2f2",
                width: "520px",
                minHeight: "120px",
                margin: "14px auto",
                borderRadius: "14px",
                padding: "12px",
                boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                alignItems: "center",
            }}
        >
            <Image
                alt="music poster"
                loading="eager"
                style={{
                    borderRadius: "12px",
                    objectFit: "cover",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                }}
                src={"/" + cover}
                width={100}
                height={100}
            />

            <div style={{ paddingLeft: "14px", width: "100%" }}>
                <div
                    style={{
                        fontWeight: 700,
                        fontSize: "16px",
                        marginBottom: "4px",
                        color: "#222",
                    }}
                >
                    {title}
                </div>

                <div style={{ fontSize: "13px", color: "#555" }}>By: {artist}</div>
                <div style={{ fontSize: "13px", color: "#777" }}>
                    ⏱ Duration: {formatDuration(duration)}
                </div>

                <div style={{ marginTop: "10px", display: "flex", gap: "8px", flexWrap: "wrap" }}>

                    <button
                        onClick={toggleFavorite}
                        style={{
                            fontSize: "18px",
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            transition: "0.2s",
                        }}
                    >
                        {isFavorite ? <span>❤️</span> : <span style={{ fontSize: "26px" }}>♡</span>}
                    </button>

                    <button
                        onClick={playHandler}
                        style={{
                            padding: "6px 10px",
                            borderRadius: "6px",
                            border: "none",
                            background: "#4caf50",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: 600,
                            transition: "0.2s",
                        }}
                    >
                        ▶ Play
                    </button>

                    <button
                        onClick={pauseHandler}
                        style={{
                            padding: "6px 10px",
                            borderRadius: "6px",
                            border: "none",
                            background: "#ff9800",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: 600,
                            transition: "0.2s",
                        }}
                    >
                        ⏸ Pause
                    </button>

                    <button
                        onClick={stopHandler}
                        style={{
                            padding: "6px 10px",
                            borderRadius: "6px",
                            border: "none",
                            background: "#f44336",
                            color: "white",
                            cursor: "pointer",
                            fontWeight: 600,
                            transition: "0.2s",
                        }}
                    >
                        ⏹ Stop
                    </button>

                    <button
                        onClick={removeSong}
                        style={{
                            padding: "6px 10px",
                            borderRadius: "6px",
                            border: "1px solid red",
                            background: "transparent",
                            color: "red",
                            cursor: "pointer",
                            fontWeight: 600,
                            marginLeft: "auto",
                            transition: "0.2s",
                        }}
                    >
                        🗑 Remove
                    </button>
                </div>

                <div
                    style={{
                        fontSize: "12px",
                        marginTop: "6px",
                        color: "#444",
                    }}
                >
                    ⏱ Current: {currentTime.toFixed(1)} sec
                </div>

                <audio
                    ref={audioRef}
                    src={"/" + url}
                />
            </div>
        </div>
    );

}
