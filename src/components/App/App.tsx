import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import MovieGrid from "../MovieGrid/MovieGrid";
import { fetchMovies } from "../../services/movieService.ts";
import type { Movie } from "../../types/movies.ts";
import Loader from "../Loader/Loader.tsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.tsx";
import MovieModal from "../MovieModal/MovieModal.tsx";

export default function App() {
  const [movie, setMovie] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie>();
  const notifyError = () =>
    toast.error("No movies found for your request.", {
      style: { background: "rgba(125, 183, 255, 0.8)" },
      icon: "ℹ️",
    });

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSearch = async (newQuery: string) => {
    try {
      setIsLoading(true);
      setError(false);
      const newMovies = await fetchMovies(newQuery);
      if (newMovies.length === 0) {
        notifyError();
      }

      setMovie(newMovies);
      setIsLoading(false);
    } catch {
      setError(true);
      setMovie([]);
      console.log("CATch");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {movie.length > 0 && <MovieGrid onSelect={openModal} movies={movie} />}
      {isModalOpen && <MovieModal onClose={closeModal} movie={selectedMovie} />}
    </>
  );
}
