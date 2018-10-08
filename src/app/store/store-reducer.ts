import * as storeAction from './actions'
import { Action } from '@ngrx/store'
import { INITIAL_APP_STATE, AppState } from './app-state'
import * as _ from 'lodash'

export function storeReducer(state: AppState = INITIAL_APP_STATE, action: Action) {
  switch (action.type) {
    case storeAction.LOAD_USER_THREADS_SUCCESS:
      return loadUserThreadsSuccess(
        state,
        action as storeAction.LoadUserThreadsSuccessAction
      )
    case storeAction.SET_CURRENT_USER:
      return setCurrentUser(state, action as storeAction.SetCurrentUser)
    default:
      return state
  }
}

function setCurrentUser(state: AppState, action: storeAction.SetCurrentUser) {
  const userId = action.userId
  const newState: AppState = Object.assign({}, state, {
    uiState: { currentUserId: userId },
  })
  return newState
}

function loadUserThreadsSuccess(
  state: AppState,
  action: storeAction.LoadUserThreadsSuccessAction
): AppState {
  const allUserData = action.payload
  const newState: AppState = Object.assign({}, state, {
    storeData: {
      participants: _.keyBy(allUserData.participants, 'id'),
      threads: _.keyBy(allUserData.threads, 'id'),
      messages: _.keyBy(allUserData.messages, 'id'),
    },
  })
  return newState
}
