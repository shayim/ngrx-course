import { StoreData, INITIAL_STOREDATA_STATE } from './store-data'
import { UiState, INITIAL_UI_STATE } from './ui-state'

export interface AppState {
  uiState: UiState
  storeData: StoreData
}

export const INITIAL_APP_STATE: AppState = {
  uiState: INITIAL_UI_STATE,
  storeData: INITIAL_STOREDATA_STATE,
}
