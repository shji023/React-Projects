import React, { useEffect, useState } from "react";
import { getMovieData } from "./libs/api";
import Movie from "./Movie";

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
      {loading
        ? "loading..."
        : movies.map((movie) => {
            console.log(movie);
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
              />
            );
          })}
    </div>
  );
}

export default App;
