import { combineReducers } from 'redux';
import { HomeState } from './state';
import { reducerLoadMetaData } from '../useCases/reducer';

export const reducerHome = combineReducers<HomeState>({
  loadMetaDataState: reducerLoadMetaData
});
