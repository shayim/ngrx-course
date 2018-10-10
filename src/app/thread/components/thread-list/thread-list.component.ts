import { ThreadSummary } from '../../view-models/thread-summary'
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core'

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css'],
})
export class ThreadListComponent implements OnInit {
  @Input()
  currentThreadId: number

  @Input()
  threads: ThreadSummary[]

  @Output()
  threadSelected = new EventEmitter<number>()

  constructor() {}

  ngOnInit() {}

  select(thread: ThreadSummary) {
    this.threadSelected.emit(thread.id)
  }
}
