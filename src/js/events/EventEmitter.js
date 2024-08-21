'use strict';

/**
 * @exsample
 *
import EventEmitter from 'events/EventEmitter';

//listen
EventEmitter.ee.on('event_name', func);

//remove
EventEmitter.ee.removeListener('event_name', func);

//emit
EventEmitter.ee.emit('event_name', data);
 */
export default class EventEmitter
{

  constructor()
  {
    const EE = require('events').EventEmitter;
    let ee;

    EventEmitter.ee = new EE();
    EventEmitter.ee.setMaxListeners(0); //unlimit
  }

}

new EventEmitter();