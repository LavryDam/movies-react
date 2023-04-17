import styles from "./MovieCard.module.css";

export function MovieCard({ movie }) {
  const imageUrl ="https://image.tmdb.org/t/p/w500" + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <img 
        width={230}
        height={345}
        className={styles.movieImage} 
        src={imageUrl} 
        alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
      </div>
    </li>
  );
}