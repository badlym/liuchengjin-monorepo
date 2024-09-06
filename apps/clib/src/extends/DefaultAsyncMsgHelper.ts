import { AsyncMsgHelper } from '../callApi';
import { PushCenterClient } from '../../../../../backend/packages/push-center/src/fe/ws.class';
import { EventKey, PushEvent } from '../../../../../backend/packages/api-saas/src/faas/util/push-message.code';
import type { AsyncMsg, AsyncMsgHandler } from '../../../../../backend/packages/api-saas/src/mw/async/asyncMsg';

export default class DefaultAsyncMsgHelper implements AsyncMsgHelper {
  private readonly _pushCenterClient: PushCenterClient<PushEvent>;
  private readonly _eventKey: EventKey;
  private readonly _msgHandles: Map<string, AsyncMsgHandler<any>>;

  constructor(pushCenterClient: PushCenterClient<PushEvent>, eventKey: EventKey) {
    this._msgHandles = new Map<string, AsyncMsgHandler<any>>();
    this._pushCenterClient = pushCenterClient;
    this._eventKey = eventKey;
    this._init();
  }

  _init() {
    this._pushCenterClient.onMsg(this._eventKey, (res) => {
      const processMsg = res.data as AsyncMsg<any>;

      if (processMsg.channelId) {
        const handle = this._msgHandles.get(processMsg.channelId);
        if (handle) {
          handle(processMsg.data).finally(() => {
            // 取消监听
            this._unregister(processMsg.channelId);
          });
        } else {
          console.log('not found msqHandler: ' + processMsg.channelId);
        }
      } else {
        console.log('msg invalid');
      }
    });
  }


  async registerIfAbsent(channelId: string, asyncMsgHandler: AsyncMsgHandler<any>): Promise<boolean> {
    const roomArr = `async_msg:${channelId}`;
    const result: any = await this._pushCenterClient.registerRoom([roomArr], 5000);
    if (result.code != 0) {
      return false;
    }

    this._msgHandles.set(roomArr, asyncMsgHandler);

    return true;
  }

  async unregister(channelId: string) {
    const roomArr = `async_msg:${channelId}`;
    await this._unregister(roomArr);
  }

  async _unregister(channelId: string) {
    this._msgHandles.delete(channelId);
    await this._pushCenterClient.unRegisterRoom(channelId);
  }

}
