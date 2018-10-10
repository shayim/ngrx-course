import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { Participant } from '../../models/participant'
import { ThreadSummary } from '../../view-models/thread-summary'

import * as actions from '../../store/thread-actions'
import * as fromThread from '../../store'

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css'],
})
export class ThreadSectionComponent implements OnInit {
  currentUser$ = this.store.pipe(select(fromThread.getCurrentUser))
  unreadMessage$ = this.store.pipe(select(fromThread.getCurrentUserUnReadMessagesCount))
  threadSummaries$ = this.store.pipe(select(fromThread.getCurrentUserThreadSummary))
  currentThread$: Observable<number> = this.store.pipe(
    select(fromThread.selectCurrentThreadId)
  )

  constructor(private store: Store<fromThread.State>) {}

  ngOnInit() {
    this.store.dispatch(new actions.LoadThreads())
  }
  onThreadSelected(threadId: number) {
    this.store.dispatch(new actions.SetCurrentThread(threadId))
  }
}
