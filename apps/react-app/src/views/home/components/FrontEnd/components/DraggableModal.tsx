import { Modal, ModalProps } from 'antd';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Draggable, { DraggableBounds, DraggableData, DraggableEvent } from 'react-draggable';

import { Resizable } from 'react-resizable';

import './index.css';
import './styles.css';

interface DraggableModalProps extends ModalProps {
  modalMinWidth?: number;
  width?: number;
  height?: number;
  modalMinHeight?: number;
}

const DraggableModal: React.FC<DraggableModalProps> = (props) => {
  const [bound, setBound] = useState<DraggableBounds>({ left: 0, top: 0, bottom: 0, right: 0 });
  // const modalRef = useRef<HTMLElement>();
  const draggableRef = useRef();
  const { children, ...other } = props;
  const [resizableWidth, setResizableWidth] = useState<number>(props.width || 0);
  const [resizableHeight, setResizableHeight] = useState<number>(props.height || 0);
  const resizeableSpaceWidth = 5;
  const defaultMinSize = 400;
  const onStart = (event: DraggableEvent, draggableData: DraggableData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = (draggableRef?.current as any)?.getBoundingClientRect();
    setBound({
      left: -targetRect?.left + draggableData?.x,
      right: clientWidth - (targetRect?.right - draggableData?.x) - resizeableSpaceWidth,
      top: -targetRect?.top + draggableData?.y,
      bottom: clientHeight - (targetRect?.bottom - draggableData?.y),
    });
  };

  useLayoutEffect(() => {
    setResizableWidth(props.width || defaultMinSize);
  }, [props.width]);

  const onResize = (e: React.SyntheticEvent<Element, Event>, { size }: any) => {
    if (size.width < (props.modalMinWidth || defaultMinSize)) {
      setResizableWidth(props.modalMinWidth || defaultMinSize);
    } else {
      setResizableWidth(size.width);
    }

    if (size.height < (props.modalMinHeight || defaultMinSize)) {
      setResizableHeight(props.modalMinHeight || defaultMinSize);
      console.log(size.height);
    } else {
      setResizableHeight(size.height);
    }
  };

  return (
    <Modal
      {...other}
      // ref={modalRef}
      width={resizableWidth}
      styles={{
        body: {
          height: resizableHeight,
        },
      }}
      modalRender={(modal) => (
        <Draggable
          handle={'.ant-modal-header'}
          bounds={bound}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          {/* @ts-ignore*/}
          <div ref={draggableRef} className={'draggable-modal'}>
            <Resizable width={resizableWidth} height={resizableHeight} onResize={onResize}>
              {modal}
            </Resizable>
          </div>
        </Draggable>
      )}
    >
      {children}
    </Modal>
  );
};

export default DraggableModal;
