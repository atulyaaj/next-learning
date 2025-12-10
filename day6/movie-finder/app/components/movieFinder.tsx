'use client';
import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import "./movieFinder.css";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
};

export default function MovieFinder() {

    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState<Movie[]>([]);
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=1");

            if (!response.ok) {
                throw new Error("Failed to fetch movies");
            }

            const data = await response.json();
            // console.log(data.results);
            setMovies(data.results);
            setFilteredMovies(data.results);
        }
        catch (error) {
            setError("Error fetching movies");
            console.error("Error:", error);
        }
    }

    const searchMovies = () => {
        setLoading(true);
        setError("");

        setTimeout(() => {
            const q = query.toLowerCase();

            if (!q) {
                setFilteredMovies(movies);
                setLoading(false);
                return;
            };

            const filtered = movies.filter((movie) =>
                movie.title.toLowerCase().includes(q)
            );

            setFilteredMovies(filtered);
            setLoading(false);
        }, 500);

    }

    return (
        <div className="movie-app">
            <h1 className="heading">Movie Finder 🎬</h1>

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={searchMovies}>Search</button>
            </div>

            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}

            <div className="movie-grid">
                {filteredMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    )
}