import { ThreadSummary } from './../../../shared/view-models/thread-summary'
import { Component, OnInit, Input } from '@angular/core'

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css'],
})
export class ThreadListComponent implements OnInit {
  @Input()
  threads: ThreadSummary[]
  constructor() {}

  ngOnInit() {
    console.log(this.threads)
  }
}
