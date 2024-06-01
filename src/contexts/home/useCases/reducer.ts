import {
  LOAD_METADATA,
  LOAD_METADATA_FAILED,
  LOAD_METADATA_SUCCESS,
  LoadMetaDataActionTypes,
} from '@contexts/home/useCases/actions';
import { LoadMetaDataState } from '@contexts/home/configuration/state';

// Define the initial state for the reducer
const initialState: LoadMetaDataState = {
  loading: false,
  items: [],
  error: undefined,
};

/**
 * Reducer function to handle metadata loading actions
 *
 * @param {LoadMetaDataState} state - The current state of the metadata loading.
 * @param {LoadMetaDataActionTypes} action - The action dispatched to the reducer.
 * @returns {LoadMetaDataState} The new state after applying the action.
 */
export const reducerLoadMetaData = (
  state = initialState,
  action: LoadMetaDataActionTypes,
): LoadMetaDataState => {
  switch (action.type) {
    case LOAD_METADATA:
      return { loading: true, items: [], error: undefined };

    case LOAD_METADATA_SUCCESS:
      return { loading: false, items: action.payload, error: undefined };

    case LOAD_METADATA_FAILED:
      return { loading: false, items: [], error: action.payload };

    default:
      return state;
  }
};
