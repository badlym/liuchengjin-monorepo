import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Button, Popconfirm } from 'antd';
import { omit } from 'lodash-es';
import { useRef } from 'react';

import { createApi, deleteByIdApi, findAllApi, updateByIdApi } from '@/api/user';

const columns: ProColumns[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    copyable: true, // 可复制
    ellipsis: true, // 超出省略
  },
  {
    title: '性别',
    dataIndex: 'sex',
    search: false, // 不可搜索
    ellipsis: true, // 超出省略
    // @ts-ignore
    // editable: (_value, record, _index) => {
    //   if (!isEmpty(record)) {
    //     const isOnlyId = keys(record).length === 1 && has(record, 'id')
    //     if (isOnlyId) return true
    //     return false
    //   }
    // },
    valueType: 'select',
    valueEnum: {
      '0': {
        text: '男',
      },
      '1': {
        text: '女',
      },
    },
  },
  {
    title: '年龄',
    dataIndex: 'age',
    search: false, // 不可搜索
    ellipsis: true, // 超出省略
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    search: false, // 不可搜索
    ellipsis: true, // 超出省略
  },

  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (_text, record, _, action) => {
      const confirm = () => {
        void deleteByIdApi(record.id).then(() => {
          void action?.reload();
        });
      };
      return [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id);
          }}
        >
          编辑
        </a>,
        <Popconfirm
          title="删除"
          description="确认删除此条数据吗?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <a>删除</a>
        </Popconfirm>,
      ];
    },
  },
];

export default () => {
  const actionRef = useRef<ActionType>();
  return (
    <ProTable
      columns={columns}
      actionRef={actionRef}
      cardBordered
      request={async (params) => {
        const res = await findAllApi({
          page: params.current,
          limit: params.pageSize,
          ...params,
        });
        return {
          data: res.items,
          success: true,
          total: res.meta.totalItems,
        };
      }}
      editable={{
        type: 'multiple',
        async onSave(_, row, _originRow, newLineConfig) {
          if (newLineConfig) {
            await createApi(omit(row, 'id'));
          } else {
            await updateByIdApi(row);
          }
        },
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value);
        },
      }}
      rowKey="id"
      search={{
        labelWidth: 'auto',
      }}
      options={{
        setting: {
          listsHeight: 400,
        },
      }}
      pagination={{
        pageSize: 10,
      }}
      dateFormatter="string"
      headerTitle="用户"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef?.current?.addEditRecord({ id: Date.now() }, { position: 'top' });
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  );
};
