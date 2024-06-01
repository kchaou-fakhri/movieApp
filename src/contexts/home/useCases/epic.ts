import { store } from '@reduxConfig/store';
import { loadMetaData, loadMetaDataFailed, loadMetaDataSuccess } from './actionsTypes';
import { OMDService } from '@service/omdService';


export const epicLoadMetaData = () => {
    store.dispatch(loadMetaData(true))
    try {
        OMDService.getRandomMovie().then((data) => {
            store.dispatch(loadMetaDataSuccess(data))

        })
    } catch (e) {
        store.dispatch(loadMetaDataFailed(e))
        console.error(e)

    }
}
