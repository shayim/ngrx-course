import { Participant } from './../models/participant'
import { Thread } from '../models/thread'
import { Message } from '../models/message'

export interface AllUserData {
  participants: Participant[]
  threads: Thread[]
  messages: Message[]
}
