"use client";
import { useState } from "react";
import MusicComponent from "./components/audio-comp";

interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  url: string;
  isFavorite: boolean;
}

export default function Home() {
  const [songs, setSongs] = useState<Song[]>([
    {
      id: 1,
      title: "Mindless Attrition",
      artist: "Martin Klem",
      duration: 112,
      cover: "001.jpg",
      url: "001 Mindless Attrition.mp3",
      isFavorite: false,
    },
    {
      id: 2,
      title: "No Spark",
      artist: "White Bones",
      duration: 112,
      cover: "002.jpg",
      url: "002 No Spark.mp3",
      isFavorite: true,
    },
    {
      id: 3,
      title: "Common Mistake",
      artist: "Water Mirrors",
      duration: 121,
      cover: "003.jpg",
      url: "003 Common Mistake.mp3",
      isFavorite: false,
    },
    {
      id: 4,
      title: "My Sweet Cabriolet",
      artist: "Edward Joe Myers",
      duration: 125,
      cover: "004.jpg",
      url: "004 My Sweet Cabriolet.mp3",
      isFavorite: false,
    },
    {
      id: 5,
      title: "The Tonight Show",
      artist: "Martin Baekkevold",
      duration: 106,
      cover: "005.jpg",
      url: "005 The Tonight Show.mp3",
      isFavorite: false,
    }
  ]);
  const [currentSong, setCurrentSong] = useState<number | null>(null);

  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        maxWidth: "760px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#222",
          fontSize: "32px",
          fontWeight: 700,
        }}
      >
        🎵 Playlist Manager
      </h1>

      <div
        style={{
          backgroundColor: "#f7f7f7",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: 0, color: "#333" }}>Now Playing</h2>
        <div
          style={{
            marginTop: "4px",
            fontSize: "18px",
            fontWeight: 600,
            color: "#444",
          }}
        >
          {currentSong
            ? songs.find(s => s.id === currentSong)?.title
            : "Waiting to play..."}
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ margin: 0, color: "#333" }}>⭐ Favorite Songs</h2>

        {songs.filter(s => s.isFavorite).length === 0 ? (
          <p style={{ color: "#777", marginTop: "8px" }}>No favorites yet.</p>
        ) : (
          <ul style={{ marginTop: "10px", paddingLeft: "18px", color: "#555" }}>
            {songs.filter(s => s.isFavorite).map(f => (
              <li
                key={f.id}
                style={{
                  padding: "4px 0",
                  fontSize: "15px",
                }}
              >
                {f.title}
              </li>
            ))}
          </ul>
        )}
      </div>

      <h2
        style={{
          marginBottom: "10px",
          color: "#333",
          fontWeight: 600,
        }}
      >
        🎼 Playlist
      </h2>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {songs.map(song => (
          <li key={song.id}>
            <MusicComponent
              {...song}
              songs={songs}
              setSongs={setSongs}
              currentSong={currentSong}
              setCurrentSong={setCurrentSong}
            />
          </li>
        ))}
      </ul>

    </div>
  );
}
