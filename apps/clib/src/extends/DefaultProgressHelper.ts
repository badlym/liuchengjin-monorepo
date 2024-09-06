import { ProgressHelper, RoomListener } from '../callApi';
import type { PushCenterClient } from '../../../../../backend/packages/push-center/src/fe/ws.class';
import type { EventKey, PushEvent } from '../../../../../backend/packages/api-saas/src/faas/util/push-message.code';

import type { ProgressMsg } from '../../../../../backend/packages/api-saas/src/mw/async';
import DefaultRoomListener from './DefaultRoomListener';

/**
 * 默认的进度处理
 */
export default class DefaultProgressHelper implements ProgressHelper {

  private readonly roomListeners: Map<string, RoomListener>;

  private readonly _pushCenterClient: PushCenterClient<PushEvent>;

  private readonly _eventKey: EventKey;

  constructor(pushCenterClient: PushCenterClient<PushEvent>, eventKey: EventKey) {
    this.roomListeners = new Map<string, RoomListener>();
    this._pushCenterClient = pushCenterClient;
    this._eventKey = eventKey;
    this._init();
  }

  _init() {
    this._pushCenterClient.onMsg(this._eventKey, (res) => {
      const processMsg = res.data as ProgressMsg<any>;

      if (processMsg.channelId) {
        const roomListener = this.roomListeners.get(processMsg.channelId);
        if (roomListener) {
          roomListener.dispatchMsg(processMsg);
        } else {
          console.log('not found listener: ' + processMsg.channelId);
        }
      } else {
        console.log('process msg invalid');
      }
    });

    this._pushCenterClient.onDisconnect(() => {
      for (const room of this.roomListeners.values()) {
        room.offline();
      }
    });
  }

  async registerIfAbsent(channelId: string): Promise<RoomListener | null> {
    if (this.roomListeners.has(channelId)) {
      return this.roomListeners.get(channelId) as RoomListener;
    }
    const roomListener = new DefaultRoomListener(channelId);
    const result: any = await this._pushCenterClient.registerRoom([roomListener.roomId], 5000);
    console.log('注册room：', roomListener.roomId, result);
    if (result.code != 0) {
      return null;
    }

    // 再次检查room 是否存在, 如果存在忽律新创建的room
    if (this.roomListeners.has(channelId)) {
      return this.roomListeners.get(channelId) as RoomListener;
    } else {
      this.roomListeners.set(channelId, roomListener);
    }
    return roomListener;
  }

  async unregister(channelId: string) {
    const roomListener = this.roomListeners.get(channelId);
    this.roomListeners.delete(channelId);
    if (roomListener) {
      await this._pushCenterClient.unRegisterRoom((roomListener as DefaultRoomListener).roomId);
    }
  }

}
