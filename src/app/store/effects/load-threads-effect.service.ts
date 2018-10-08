import { ThreadService } from './../../services/thread.service'
import { Injectable } from '@angular/core'
import { Actions, Effect } from '@ngrx/effects'
import * as actions from '../actions'
import { switchMap, map } from 'rxjs/operators'
import { AllUserData } from '../../../shared/api-models/all-user-data'

@Injectable()
export class LoadUserThreadsEffect {
  constructor(private actions$: Actions, private ts: ThreadService) {}

  @Effect()
  userThreads = this.actions$
    .ofType(actions.LOAD_USER_THREADS)
    .pipe(
      switchMap(() =>
        this.ts
          .getUserThreads()
          .pipe(
            map((data: AllUserData) => new actions.LoadUserThreadsSuccessAction(data))
          )
      )
    )
}
