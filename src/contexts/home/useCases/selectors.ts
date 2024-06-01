import { Movie } from '@model/movie';
import { AppState } from '@reduxConfig/appState';

export const loadingMetaDataSelector = (appState: AppState): boolean => {
  return appState.homeState.loadMetaDataState.loading;
};

export const metaDataSelector = (appState: AppState): Movie[] | undefined => {
  return appState.homeState?.loadMetaDataState.items;
};

export const metaDataSelectorError = (
  appState: AppState,
): string | undefined => {
  return appState.homeState.loadMetaDataState.error;
};
