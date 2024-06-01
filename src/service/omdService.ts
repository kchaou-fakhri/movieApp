import { MOVIES_SUBJECTS } from "@constants/constants";
import { WSConfiguration } from "@constants/wsConfiguration";
import { Movie } from "@model/movie";
import { mapperToMovies } from "./mapper/movieMapper";
import { MovieDto } from "@model/dto/movie.dto";
import { MovieDetails } from "@model/movieDetails";

export class OMDService {

    /**
     * Fetches a random movie from the API.
     * 
     * @returns {Promise<Movie[]>} A promise that resolves to an array of Movie objects.
     */
    static async getRandomMovie(): Promise<Movie[]> {
        try {
            const response = await fetch(`${WSConfiguration.BASE_URL}?apikey=${WSConfiguration.API_KEY}&s=${this.getRandomItem()}`);

            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }

            const data: MovieDto[] = await response.json();
            return mapperToMovies(data);
        } catch (error) {
            console.error("Failed to fetch random movie:", error);
            return [];
        }
    }

    /**
     * Fetches movie details by ID from the API.
     * 
     * @param {string} id - The ID of the movie.
     * @returns {Promise<MovieDetails | undefined>} A promise that resolves to the MovieDetails object or undefined if there was an error.
     */
    static async getMovieByID(id: string): Promise<MovieDetails | undefined> {
        try {
            const response = await fetch(`${WSConfiguration.BASE_URL}?apikey=${WSConfiguration.API_KEY}&i=${id}`);

            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.statusText}`);
            }

            const data: MovieDetails = await response.json();
            return data;
        } catch (error) {
            console.error("Failed to fetch movie by ID:", error);
            return undefined;
        }
    }

    /**
     * Gets a random item from the MOVIES_SUBJECTS array.
     * 
     * @returns {string} A random item from the MOVIES_SUBJECTS array.
     */
    private static getRandomItem(): string {
        const randomIndex = Math.floor(Math.random() * MOVIES_SUBJECTS.length);
        return MOVIES_SUBJECTS[randomIndex];
    }
}
