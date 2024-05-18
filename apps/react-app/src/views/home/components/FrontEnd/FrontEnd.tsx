import { Button, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';

import { buttonStyle, totalStyle } from './FrontEnd.css';
import './index.css';

export enum HighlightLevelEnum {
  高相关性 = 1,
  中相关性 = 2,
  低相关性 = 3,
}
const FrontEnd = observer(() => {
  const { counterStore } = useMst();
  const setSyncCount = () => {
    counterStore.setSyncIncrement();
  };
  const setAsyncCount = () => {
    void counterStore.setAsyncIncrement();
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onButtonClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    console.log(event);
    counterStore.getMap();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const logName = () => {
    // counterStore.logName();
  };
  const logInfo = () => {
    const values = Object.values(HighlightLevelEnum);
    console.log(values);
    counterStore.logInfo();
  };
  const flag = true;
  return (
    <div>
      <Space>
        <button className={buttonStyle} onClick={setSyncCount}>
          同步新增 is {counterStore.syncCount}
        </button>
        <button className={buttonStyle} onClick={setAsyncCount}>
          异步新增 is {counterStore.asyncCount}
        </button>
        <Button type={'primary'} onClick={showModal} className={'tw-ml-4'}>
          点击弹窗
        </Button>

        <Button type={'primary'} onClick={logName} className={'tw-ml-4'}>
          打印名字
        </Button>

        <Button type={'primary'} onClick={logInfo} className={'tw-ml-4'}>
          打印信息
        </Button>
        <Button
          type={'primary'}
          onClick={() => {
            // childStore2.logInfo();
            // childStore.logInfo();
          }}
          className={'tw-ml-4'}
        >
          bar打印信息
        </Button>
        <div className={'zgg-relative'}>
          <Button type={'primary'} onClick={onButtonClick} className={'tw-ml-4'}>
            打印map
          </Button>

          {/*{flag && (*/}
          {/*  <Tooltip*/}
          {/*    className={'zgg-absolute'}*/}
          {/*    placement={'top'}*/}
          {/*    overlayInnerStyle={{ boxShadow: 'none', padding: 0 }}*/}
          {/*    open={true}*/}
          {/*    title={*/}
          {/*      <Alert*/}
          {/*        className={'zgg-w-2xl'}*/}
          {/*        message="pushcenter返回的错误信息"*/}
          {/*        description={*/}
          {/*          <Space direction={'vertical'}>*/}
          {/*            <div className={'zgg-flex'}>*/}
          {/*              <Typography.Title type={'danger'} level={5}>*/}
          {/*                错误状态码-status*/}
          {/*              </Typography.Title>*/}

          {/*              <Typography.Text className={'zgg-ml-4'}>1</Typography.Text>*/}
          {/*            </div>*/}
          {/*            <div className={'zgg-flex'}>*/}
          {/*              <Typography.Title type={'danger'} level={5}>*/}
          {/*                错误来源-from*/}
          {/*              </Typography.Title>*/}

          {/*              <Typography.Text className={'zgg-ml-4'}>1</Typography.Text>*/}
          {/*            </div>*/}

          {/*            <div>*/}
          {/*              <Typography.Title type={'danger'} level={5}>*/}
          {/*                错误内容-content*/}
          {/*              </Typography.Title>*/}

          {/*              <Typography.Text>*/}
          {/*                阿斯顿发大水范德萨发撒*/}
          {/*                但是发多少范德萨发收到发多少发多少撒多福多寿范德萨发阿萨德发第三撒旦法大师傅时段是的范德萨*/}
          {/*              </Typography.Text>*/}
          {/*            </div>*/}
          {/*            <div></div>*/}
          {/*          </Space>*/}
          {/*        }*/}
          {/*        type="error"*/}
          {/*        closable*/}
          {/*      />*/}
          {/*    }*/}
          {/*  >*/}
          {/*    <div*/}
          {/*      style={{*/}
          {/*        left: '50%',*/}
          {/*        top: '0',*/}
          {/*        transform: 'translate(-50%, -50%)',*/}
          {/*      }}*/}
          {/*      className={'zgg-absolute '}*/}
          {/*    ></div>*/}
          {/*  </Tooltip>*/}
          {/*)}*/}
        </div>
      </Space>
      {/*<Alert*/}
      {/*  style={{ position: 'absolute', top: 0, right: 0 }}*/}
      {/*  banner={true}*/}
      {/*  message="Error Text"*/}
      {/*  description="Error Description Error Description Error Description Error Description Error Description Error Description"*/}
      {/*  type="error"*/}
      {/*  closable*/}
      {/*/>*/}
      <div>{counterStore.addAge}年龄</div>

      <div className={totalStyle}>计算属性相加 is {counterStore.totalCount}</div>
      <h1 className={'  mt-20px prose prose-red '}>文字预设</h1>
      <div className={'zgg-flex zgg-w-full zgg-h-[500px] zgg-bg-red zgg-flex-col '}>
        <div
          className={'zgg-h-[74px]'}
          style={
            {
              // flex: '1 1 auto',
            }
          }
        >
          1
        </div>
        <div
          style={{
            flex: '1 1 ',
          }}
        >
          2
        </div>
      </div>

      <div>
        {/*<DraggableModal*/}
        {/*  // ref={draggableRef}*/}
        {/*  modalMinWidth={400}*/}
        {/*  modalMinHeight={20}*/}
        {/*  width={800}*/}
        {/*  title="Basic Modal"*/}
        {/*  open={isModalOpen}*/}
        {/*  onOk={handleOk}*/}
        {/*  onCancel={handleCancel}*/}
        {/*></DraggableModal>*/}
      </div>
    </div>
  );
});
export default FrontEnd;
