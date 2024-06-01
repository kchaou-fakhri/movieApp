import { Movie } from '@model/movie';
import {
  LOAD_METADATA,
  LOAD_METADATA_FAILED,
  LOAD_METADATA_SUCCESS,
  LoadMetaDataAction,
  LoadMetaDataFailedAction,
  LoadMetaDataSuccessAction,
} from './actions';

export const loadMetaData = (loading: boolean): LoadMetaDataAction => ({
  type: LOAD_METADATA,
  payload: loading,
});

export const loadMetaDataSuccess = (
  items: Movie[],
): LoadMetaDataSuccessAction => ({
  type: LOAD_METADATA_SUCCESS,
  payload: items,
});

export const loadMetaDataFailed = (
  error: string,
): LoadMetaDataFailedAction => ({
  type: LOAD_METADATA_FAILED,
  payload: error,
});
