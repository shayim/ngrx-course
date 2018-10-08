import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component'
import { UserSelectionComponent } from './components/user-selection/user-selection.component'
import { MessageListComponent } from './components/message-list/message-list.component'
import { MessageSectionComponent } from './components/message-section/message-section.component'
import { ThreadListComponent } from './components/thread-list/thread-list.component'
import { ThreadSectionComponent } from './components/thread-section/thread-section.component'
import { storeReducer } from './store/store-reducer'
import { LoadUserThreadsEffect } from './store/effects/load-threads-effect.service'

@NgModule({
  declarations: [
    AppComponent,
    UserSelectionComponent,
    MessageListComponent,
    MessageSectionComponent,
    ThreadListComponent,
    ThreadSectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ storeData: storeReducer }),
    EffectsModule.forRoot([LoadUserThreadsEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
