export interface Thread {
  id: number
  messageIds: number[]
  participants: { [key: number]: number } // key: participantId, value: unread message id
}
