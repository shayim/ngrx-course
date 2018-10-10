import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store'

import { ThreadSummary } from '../view-models/thread-summary'

import * as fromData from './data-reducer'
import * as fromUi from './ui-reducer'
import * as fromRoot from '../../store/app-state'

export interface ThreadState {
  data: fromData.State
  ui: fromUi.State
}

export interface State extends fromRoot.State {
  thread: ThreadState
}

export const reducers: ActionReducerMap<ThreadState> = {
  data: fromData.reducer,
  ui: fromUi.reducer,
}

export const selectThreadState = createFeatureSelector<State, ThreadState>('thread')

export const selectThreadData = createSelector(
  selectThreadState,
  (state: ThreadState) => state.data
)
export const selectThreadUi = createSelector(
  selectThreadState,
  (state: ThreadState) => state.ui
)
export const selectParticipants = createSelector(
  selectThreadData,
  fromData.getParticipants
)
export const getParticipants = createSelector(selectParticipants, participants =>
  Object.values(participants)
)
export const selectThreads = createSelector(selectThreadData, fromData.getThreads)
export const getThreads = createSelector(selectThreads, threads => Object.values(threads))
export const selectMessages = createSelector(selectThreadData, fromData.getMessages)

export const selectCurrentThreadId = createSelector(
  selectThreadUi,
  fromUi.getCurrentThreadId
)
export const selectCurrentUserId = createSelector(selectThreadUi, fromUi.getCurrentUserId)

export const getError = createSelector(selectThreadData, fromData.getError)

export const getCurrentUser = createSelector(
  getParticipants,
  selectCurrentUserId,
  (participants, currentUserId) => {
    if (currentUserId && participants[currentUserId]) {
      return participants[currentUserId]
    }
    if (participants[0]) {
      return participants[0]
    }
    return null
  }
)

export const getCurrentUserThreads = createSelector(
  getCurrentUser,
  getThreads,
  (user, threads) => {
    if (user) {
      return threads.filter(thread => thread.participants[user.id] !== null)
    }
    return []
  }
)

export const getCurrentUserUnReadMessagesCount = createSelector(
  getCurrentUser,
  getThreads,
  (user, threads) => {
    if (user) {
      return threads
        .filter(thread => thread.participants[user.id] !== null)
        .map(thread => thread.participants[user.id])
        .reduce((sum, v) => (sum += v), 0)
    }
  }
)

export const getCurrentUserThreadSummary = createSelector(
  getCurrentUserThreads,
  selectParticipants,
  selectMessages,
  (threads, participants, messages) => {
    return threads.map(thread => {
      const id = thread.id
      const participantNames = Object.keys(thread.participants)
        .map(key => participants[key].name)
        .join(', ')
      const last = thread.messageIds[thread.messageIds.length - 1]
      const lastMessage = messages[last]
      return {
        id,
        participants: participantNames,
        lastMessage: lastMessage.text,
        timestamp: lastMessage.timestamp,
      } as ThreadSummary
    })
  }
)
