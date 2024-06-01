import { Movie } from "@model/movie";

export interface HomeState {
  loadMetaDataState: LoadMetaDataState;
}

export interface LoadMetaDataState {
  loading: boolean;
  items: Movie[] | undefined;
  error: string | undefined;
}
