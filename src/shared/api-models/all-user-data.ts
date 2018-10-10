import { Participant } from '../../app/thread/models/participant'
import { Thread } from '../../app/thread/models/thread'
import { Message } from '../../app/thread/models/message'

export interface AllUserData {
  participants: Participant[]
  threads: Thread[]
  messages: Message[]
}
