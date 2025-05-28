import { type Movie } from "../types/movies.ts";

import axios from "axios";

export interface GetMovieRes {
  results: Movie[];
}
export const axiosConfig = {
  url: "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
};
export const fetchMovies = async (newQuery: string) => {
  const res = await axios.get<GetMovieRes>(
    `https://api.themoviedb.org/3/search/movie?query=${newQuery}`,
    axiosConfig
  );
  return res.data.results;
};
