import { EventEmitter } from 'eventemitter3';

const emitter = new EventEmitter();

const EventTypes = {
  PLAY_MUSIC: 'PLAY_MUSIC'
}

export {emitter, EventTypes}