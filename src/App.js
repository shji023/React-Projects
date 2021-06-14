import React, { useEffect, useState } from "react";
import { getMovieData } from "./libs/api";
import Movie from "./Movie";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await getMovieData();
      setLoading(false);
      setMovies(data);
    })();
  }, []);
  return (
    <div>
      <section className="container">
        {loading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
