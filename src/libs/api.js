import axios from "axios";

export const getMovieData = async () => {
  try {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    console.log(movies);
    return movies;
  } catch (e) {
    console.log(e);
    return null;
  }
};
