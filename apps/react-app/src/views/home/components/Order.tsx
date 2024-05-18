import { PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable } from '@ant-design/pro-components'
import { Button, Popconfirm } from 'antd'
import { omit } from 'lodash-es'
import { useRef } from 'react'

import { createApi, deleteByIdApi, findAllApi, updateByIdApi } from '@/api/order'
import { findAllApi as findAllUserApi } from '@/api/user'

async function request() {
  const res = await findAllUserApi({})

  return res.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
}
const columns: ProColumns[] = [
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    title: '工单名称',
    dataIndex: 'orderName',
    copyable: true, // 可复制
    ellipsis: true, // 超出省略
  },
  {
    title: '工单编号',
    dataIndex: 'orderDetails',
    search: false, // 不可搜索
    ellipsis: true, // 超出省略
  },

  {
    title: '所属用户',
    dataIndex: ['user', 'id'],
    ellipsis: true, // 超出省略
    valueType: 'select',
    request,
    // valueEnum: (row) => {
    //   debugger
    //   return {
    //     [row.user.id]: {
    //       text: row.user.name,
    //     },
    //   }
    // },
  },

  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (_text, record, _, action) => {
      const confirm = () => {
        void deleteByIdApi(record.id).then(() => {
          void action?.reload()
        })
      }
      return [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record.id)
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
      ]
    },
  },
]

export default () => {
  const actionRef = useRef<ActionType>()
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
        })
        return {
          data: res.items,
          success: true,
          total: res.meta.totalItems,
        }
      }}
      editable={{
        type: 'multiple',
        async onSave(_, row, _originRow, newLineConfig) {
          if (newLineConfig)
            await createApi(omit(row, 'id'))
          else
            await updateByIdApi(row)
        },
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        onChange(value) {
          console.log('value: ', value)
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
      headerTitle="高级表格"
      toolBarRender={() => [
        <Button
          key="button"
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef?.current?.addEditRecord({ id: Date.now() }, { position: 'top' })
          }}
          type="primary"
        >
          新建
        </Button>,
      ]}
    />
  )
}
