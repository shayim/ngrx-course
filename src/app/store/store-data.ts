import { Message } from '../../shared/models/message'
import { Thread } from '../../shared/models/thread'
import { Participant } from '../../shared/models/participant'

export interface StoreData {
  participants: { [key: number]: Participant }
  threads: { [key: number]: Thread }
  messages: { [key: number]: Message }
}

export const INITIAL_STOREDATA_STATE: StoreData = {
  participants: {},
  threads: {},
  messages: {},
}
