import { AppState } from '../../store/app-state'
import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css'],
})
export class MessageSectionComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
