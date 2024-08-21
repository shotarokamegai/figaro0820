'use strict';

import Util from '../utils/Util';
import EventEmitter from './EventEmitter';

let enableInt = -1;
let resizeInt = -1;
let pageSize;


/**
 *	import Event from 'events/Event';
 *
 * Event.add(this.listen.bind(this));
 * // or
 * // Event.add((param)=>this.listen(param));
 * 
 * listen(param)
 * {
 *   switch(param)
 *   {
 *     case Event.READY:

 *       break;
 *     case Event.LOAD:

 *       break;
 *     case Event.SCROLL:
 *       this.scroll();
 *       break;
 *     case Event.RESIZE:
 *       this.resize();
 *       break;
 *   }
 * }
 */

const READY = "DOMContentLoaded";
const DOMContentLoaded = "DOMContentLoaded";
const onreadystatechange = "onreadystatechange";
const LOAD = "load";
const UNLOAD = "unload";
const COMPLETE = "complete";
const RESIZE = "resize";
const SCROLL = "scroll";

const ENABLE = "enable";
const DISABLE = "disable";

export default class Event
{

  constructor()
  {
    // EventEmitter.ee.on('viewEvent', data => {
    // 	console.log('[ viewEvent ::: ' + data + ' ]');
    // });

    // ready ------------------------------------------------

    if(document.readyState === Event.COMPLETE)
    {
      EventEmitter.ee.emit("viewEvent", Event.READY);
    }
    else
    {
      let _ready = () =>
      {
        document.removeEventListener(Event.READY, _ready, false);
        EventEmitter.ee.emit("viewEvent", Event.READY);
      }

      document.addEventListener(Event.READY, _ready, false);
    }

    // load ------------------------------------------------
    let _load = () =>
    {
      window.removeEventListener(Event.LOAD, _load);
      EventEmitter.ee.emit("viewEvent", Event.LOAD);
    }
    window.addEventListener(Event.LOAD, _load, false);


    // scroll ------------------------------------------------

    let _scroll = () =>
    {
      pageSize = Util.getPageSize();
      EventEmitter.ee.emit("viewEvent", Event.SCROLL);
    }
    window.addEventListener(Event.SCROLL, _scroll, false);


    // resize ------------------------------------------------
    pageSize = Util.getPageSize();

    let _resize = () =>
    {
      clearTimeout(resizeInt);
      resizeInt = setTimeout(() =>
      {
        pageSize = Util.getPageSize();
        EventEmitter.ee.emit("viewEvent", Event.RESIZE);
      }, 20);
    }
    window.addEventListener(Event.RESIZE, _resize, false);
  }

  /**
   * 強制実行
   */
  static scroll()
  {
    pageSize = Util.getPageSize();
    EventEmitter.ee.emit("viewEvent", Event.SCROLL);
  }

  /**
   * 強制実行
   */
  static resize()
  {
    pageSize = Util.getPageSize();
    EventEmitter.ee.emit("viewEvent", Event.RESIZE);
  }

  static get size()
  {
    return pageSize;
  }

  static add(func)
  {
    EventEmitter.ee.on("viewEvent", func);
  }

  static remove(func)
  {
    EventEmitter.ee.removeListener("viewEvent", func);
  }
}

new Event();