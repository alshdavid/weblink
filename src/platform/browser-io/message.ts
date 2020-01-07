import { MessageType } from './message-type';

export class Message {
  constructor(
    public type: MessageType,
    public payload?: any,
  ) { }
}
