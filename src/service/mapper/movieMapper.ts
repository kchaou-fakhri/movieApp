import { MovieDto } from "@model/dto/movie.dto";
import { Movie } from "@model/movie";

export const mapperToMovies = (moviedto: MovieDto): Movie[] => {
    return moviedto.Search as Movie[];
}