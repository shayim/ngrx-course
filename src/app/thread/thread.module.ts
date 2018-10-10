import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { MessageListComponent } from './components/message-list/message-list.component'
import { MessageSectionComponent } from './components/message-section/message-section.component'
import { ThreadListComponent } from './components/thread-list/thread-list.component'
import { ThreadSectionComponent } from './components/thread-section/thread-section.component'
import { UserSelectionComponent } from './components/user-selection/user-selection.component'
import { LoadThreadsEffect } from './store/effects/load-threads-effect.service'
import { reducers } from './store'

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('thread', reducers),
    EffectsModule.forFeature([LoadThreadsEffect]),
  ],
  declarations: [
    UserSelectionComponent,
    ThreadSectionComponent,
    ThreadListComponent,
    MessageListComponent,
    MessageSectionComponent,
  ],
  exports: [ThreadSectionComponent, MessageSectionComponent, UserSelectionComponent],
})
export class ThreadModule {}
