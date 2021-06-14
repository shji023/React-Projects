import React, { useEffect, useState } from "react";
import { getMovieData } from "./libs/api";

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
  return <div>{loading && <div>loading...</div>}</div>;
}

export default App;
