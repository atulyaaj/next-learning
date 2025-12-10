import "./movieCard.css";

interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
}

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className="movie-card">
            <img
                src={IMAGE_BASE + movie.poster_path}
                alt={movie.title}
                className="movie-poster"
            />

            <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>

                <p className="movie-overview">
                    {movie.overview.split(" ").slice(0, 20).join(" ") + "... "}
                    <span className="read-more">Read More</span>
                </p>

                <div className="movie-stats">
                    <span>⭐ {movie.vote_average.toFixed(1)}</span>
                    <span>{movie.vote_count} votes</span>
                </div>
            </div>
        </div>
    );
};

