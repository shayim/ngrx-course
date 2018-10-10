import { Action } from '@ngrx/store'
import { AllUserData } from '../../../shared/api-models/all-user-data'

export enum ThreadActionTypes {
  LOAD_THREADS = '[THREADS] LOAD',
  LOAD_THREADS_SUCCESS = '[THREADS] LOAD_SUCCESS',
  LOAD_THREADS_FAILURE = '[THREADS] LOAD_FAILURE',
  SET_CURRENT_USER = '[THREADS] SET_CURRENT_USER',
  SET_CURRENT_THREAD = '[THREAD] SET_CURRENT_THREAD',
}

export class SetCurrentThread implements Action {
  readonly type = ThreadActionTypes.SET_CURRENT_THREAD
  constructor(public threadId: number) {}
}
export class LoadThreads implements Action {
  readonly type = ThreadActionTypes.LOAD_THREADS
}

export class LoadThreadsSuccess implements Action {
  readonly type = ThreadActionTypes.LOAD_THREADS_SUCCESS
  constructor(public threads: AllUserData) {}
}

export class LoadThreadsFailure implements Action {
  readonly type = ThreadActionTypes.LOAD_THREADS_FAILURE
  constructor(public error: Error | Error[]) {}
}

export class SetCurrentUser implements Action {
  readonly type = ThreadActionTypes.SET_CURRENT_USER
  constructor(public userId: number) {}
}

export type ThreadActions =
  | LoadThreads
  | LoadThreadsSuccess
  | LoadThreadsFailure
  | SetCurrentThread
  | SetCurrentUser
