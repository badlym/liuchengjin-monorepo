import { RoomListener } from '../callApi';
import type {
  ProgressMsg,
  ProgressMsgData,
  ProgressMsgType,
} from '../../../../../backend/packages/api-saas/src/mw/async';

type MsgKey = ProgressMsgType | 'offline';

/**
 * 默认的room 监听器
 */
export default class DefaultRoomListener implements RoomListener {
  private readonly _roomId: string;

  private readonly _offlineKey: MsgKey = 'offline';

  private handleMap: Map<MsgKey, Map<any, Function>>;

  constructor(channelId: string) {
    this._roomId = channelId;
    this.handleMap = new Map<MsgKey, Map<any, Function>>();
  }

  private _registerHandleIfAbsent<T extends MsgKey>(msgType: T, handleKey: any, func: Function) {
    let sets = this.handleMap.get(msgType);
    if (!sets) {
      sets = new Map<Symbol, Function>();
      this.handleMap.set(msgType, sets);
    }

    if (!sets.has(handleKey)) {
      sets.set(handleKey, func);
    }
  }

  onOffline(handler: () => void): void {
    const symbol = Symbol();
    this._registerHandleIfAbsent(this._offlineKey, symbol, handler);
  }

  offline(): void {
    const handlers = this.handleMap.get(this._offlineKey);
    if (handlers) {
      for (const handler of handlers.values()) {
        handler();
      }
    }
  }

  unregisterHandle(handleSymbol: any): void {
    for (const map of this.handleMap.values()) {
      map.delete(handleSymbol);
    }
  }

  dispatchMsg<T extends keyof ProgressMsgData>(msg: ProgressMsg<T>): void {
    const handlers = this.handleMap.get(msg.msgType);
    if (handlers) {
      for (const handler of handlers.values()) {
        handler(msg);
      }
    }
  }


  registerHandle<T extends keyof ProgressMsgData>(msgType: T, handler: (msg: ProgressMsg<T>) => Promise<any>): Symbol {
    const handleKey = Symbol(msgType);
    this._registerHandleIfAbsent(msgType, handleKey, handler);
    return handleKey;
  }


  registerHandleIfAbsent<T extends keyof ProgressMsgData>(msgType: T, handleKey: any, handler: (msg: ProgressMsg<T>) => Promise<any>): void {
    this._registerHandleIfAbsent(msgType, handleKey, handler);
  }

  get roomId() {
    return this._roomId;
  }
}

