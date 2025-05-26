import css from "./SearchBar.module.css";
import clsx from "clsx";

interface SearchBarProps {
  onSubmit: () => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  return (
    <header className={css.header}>
      {" "}
      <div className={css.container}>
        {" "}
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB{" "}
        </a>{" "}
        <form className={css.form}>
          {" "}
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
          />{" "}
          <button className={css.button} type="submit">
            Search{" "}
          </button>{" "}
        </form>{" "}
      </div>
    </header>
  );
}
