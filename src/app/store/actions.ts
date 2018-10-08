import { Action } from '@ngrx/store'
import { AllUserData } from '../../shared/api-models/all-user-data'

export const LOAD_USER_THREADS = 'LOAD_USER_THREADS'

export const LOAD_USER_THREADS_SUCCESS = 'LOAD_USER_THREADS_SUCCESS'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export class LoadUserThreadsAction implements Action {
  readonly type = LOAD_USER_THREADS
}

export class LoadUserThreadsSuccessAction implements Action {
  readonly type = LOAD_USER_THREADS_SUCCESS
  constructor(public payload: AllUserData) {}
}

export class SetCurrentUser implements Action {
  readonly type = SET_CURRENT_USER
  constructor(public userId: number) {}
}
