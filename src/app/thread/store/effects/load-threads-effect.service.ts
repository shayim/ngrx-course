import { ThreadService } from './../../services/thread.service'
import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { ThreadActionTypes, LoadThreadsSuccess } from '../thread-actions'
import { switchMap, map } from 'rxjs/operators'
import { AllUserData } from '../../../../shared/api-models/all-user-data'

@Injectable()
export class LoadThreadsEffect {
  constructor(private actions$: Actions, private ts: ThreadService) {}

  @Effect()
  userThreads = this.actions$.pipe(
    ofType(ThreadActionTypes.LOAD_THREADS),

    switchMap(() =>
      this.ts
        .getUserThreads()
        .pipe(map((data: AllUserData) => new LoadThreadsSuccess(data)))
    )
  )
}
