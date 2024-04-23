import { Button } from 'antd';
import { observer } from 'mobx-react-lite';

import { buttonStyle, totalStyle } from './FrontEnd.css';
import './index.css';

const FrontEnd = observer(() => {
  const { counterStore } = useMst();
  const setSyncCount = () => {
    counterStore.setSyncIncrement();
  };
  const setAsyncCount = () => {
    void counterStore.setAsyncIncrement();
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button className={buttonStyle} onClick={setSyncCount}>
        同步新增 is {counterStore.syncCount}
      </button>
      <button className={buttonStyle} onClick={setAsyncCount}>
        异步新增 is {counterStore.asyncCount}
      </button>
      <Button type={'primary'} onClick={showModal} className={'tw-ml-4'}>
        点击弹窗
      </Button>
      <div className={totalStyle}>计算属性相加 is {counterStore.totalCount}</div>
      <div className={'parent'}>
        <div className={'child'}></div>
      </div>
      <div>
        <DraggableModal
          // ref={draggableRef}
          modalMinWidth={400}
          modalMinHeight={20}
          width={800}
          title="Basic Modal"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        ></DraggableModal>
      </div>
    </div>
  );
});
export default FrontEnd;
