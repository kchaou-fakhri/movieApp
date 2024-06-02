import { Movie } from "@model/movie";

/**
 * Searches for movies by their title.
 * 
 * @param {Movie[]} inputMovie - The input movie list to filter movie titles.
 * @param {string} text - The search text to filter movie titles.
 * @returns {Movie[]} An array of movies whose titles match the search text.
 */
export const searchMovie = (text: string, inputMovie: Movie[]): Movie[] => {


    // Filtering movies based on the search text
    return inputMovie?.filter((movie: Movie) => movie.Title.toLowerCase().includes(text.toLowerCase())) || [];
}
