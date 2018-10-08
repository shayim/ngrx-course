import * as actions from '../../store/actions'
import { AppState } from '../../store/app-state'
import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { map, switchMap, last } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Participant } from '../../../shared/models/participant'
import * as _ from 'lodash'
import { Thread } from '../../../shared/models/thread'
import { ThreadSummary } from '../../../shared/view-models/thread-summary'

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],
})
export class ThreadSectionComponent implements OnInit {
  currentUser$: Observable<Participant>
  unreadMessage$: Observable<number>
  threadSummaries$: Observable<ThreadSummary[]>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(console.log)

    this.store.dispatch(new actions.LoadUserThreadsAction())

    this.currentUser$ = this.store
      .select('storeData')
      .pipe(map((state: AppState) => _.values(state.storeData.participants)[0]))

    this.unreadMessage$ = this.currentUser$.pipe(
      switchMap<Participant, number>((user: Participant) => {
        return this.store.select('storeData').pipe(
          map((state: AppState) => {
            const threads = _.values<Thread>(state.storeData.threads)

            return threads.reduce(function(sum, thread) {
              return (sum += thread.participants[user.id])
            }, 0)
          })
        )
      })
    )
    this.threadSummaries$ = this.currentUser$.pipe(
      switchMap<Participant, ThreadSummary[]>((user: Participant) => {
        return this.store.select('storeData').pipe(
          map((state: AppState) => {
            return _.values<Thread>(state.storeData.threads)
              .filter(thread => thread.participants[user.id] !== null)
              .map(_.partial(this.mapThreadToThreadSummary, state))
          })
        )
      })
    )
    // if (data.participants.length > 0) {
    //   this.store.dispatch(new actions.SetCurrentUser(data.participants[0].id))
    // }
  }

  mapThreadToThreadSummary = (state: AppState, thread: Thread) => {
    const id = thread.id
    const participants = _.keys(thread.participants)
      .map(key => state.storeData.participants[key].name)
      .join(', ')
    const lastMessage = state.storeData.messages[_.last(thread.messageIds)]

    return {
      id,
      participants,
      lastMessage: lastMessage.text,
      timestamp: lastMessage.timestamp,
    }
  }
}
