import { ThreadActions, ThreadActionTypes } from './thread-actions'
export interface State {
  currentThreadId: number
  currentUserId: number
}

export const INITIAL_STATE: State = { currentThreadId: null, currentUserId: null }

export function reducer(state: State = INITIAL_STATE, action: ThreadActions) {
  switch (action.type) {
    case ThreadActionTypes.SET_CURRENT_THREAD:
      return { ...state, currentThreadId: action.threadId }

    case ThreadActionTypes.SET_CURRENT_USER:
      return { ...state, currentUserId: action.userId }

    default:
      return state
  }
}

export const getCurrentThreadId = (uiState: State) => uiState.currentThreadId
export const getCurrentUserId = (uiState: State) => uiState.currentUserId
