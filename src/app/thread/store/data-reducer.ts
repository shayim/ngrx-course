import { ThreadActions, ThreadActionTypes } from './thread-actions'
import * as _ from 'lodash'

import { Message } from '../models/message'
import { Thread } from '../models/thread'
import { Participant } from '../models/participant'

export interface State {
  participants: { [key: number]: Participant }
  threads: { [key: number]: Thread }
  messages: { [key: number]: Message }
  error: Error | Error[]
}

export const INITIAL_STATE: State = {
  participants: {},
  threads: {},
  messages: {},
  error: null,
}

export function reducer(state: State = INITIAL_STATE, action: ThreadActions): State {
  switch (action.type) {
    case ThreadActionTypes.LOAD_THREADS_SUCCESS:
      return {
        ...state,
        participants: _.keyBy(action.threads.participants, 'id'),
        threads: _.keyBy(action.threads.threads, 'id'),
        messages: _.keyBy(action.threads.messages, 'id'),
        error: null,
      }

    case ThreadActionTypes.LOAD_THREADS_FAILURE:
      return {
        ...state,
        error: action.error,
      }

    default:
      return state
  }
}

export const getParticipants = (dataState: State) => dataState.participants
export const getThreads = (dataState: State) => dataState.threads
export const getMessages = (dataState: State) => dataState.messages
export const getError = (dataState: State) => dataState.error
