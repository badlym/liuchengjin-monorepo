<script lang="ts" setup>
import type { VxeGridProps } from 'vxe-table';
import { findAllApi } from '/@/api/core/user';

const gridOptions: VxeGridProps = {
  columns: [
    { type: 'seq' as const, width: 70, showOverflow: true },
    { field: 'name', title: '姓名', showOverflow: true },
    {
      field: 'sex',
      title: '性别',
      showOverflow: true,
      formatter: ({ cellValue }) => (cellValue === '0' ? '男' : '女'),
    },
    { field: 'age', title: '年龄', showOverflow: true },
    { field: 'email', title: '邮箱', showOverflow: true },
  ],
};
</script>
<template>
  <div class="">
    <BaseGrid :grid-options="gridOptions" :query-api="findAllApi" />
  </div>
</template>
<style scoped></style>
