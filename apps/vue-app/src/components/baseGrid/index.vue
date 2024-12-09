<script lang="ts" setup>
import type { VxeGridProps } from 'vxe-table';
import { computed, reactive } from 'vue';
import { findAllApi } from '/@/api/core/user';
const props = withDefaults(
  defineProps<{
    gridOptions?: VxeGridProps;
    formConfig?: Record<string, any>;
  }>(),
  {
    gridOptions: () => ({}),
    formConfig: () => ({}),
  },
);

const defaultGridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  height: '100%',
  maxHeight: '100%',
  showOverflow: true,
  pagerConfig: {
    enabled: true,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100],
    layouts: [
      'PrevPage',
      'JumpNumber',
      'NextPage',
      'FullJump',
      'Sizes',
      'Total',
    ],
  },
  proxyConfig: {
    ajax: {
      query: async ({ page }) => {
        // 默认接收 Promise<{ result: [], page: { total: 100 } }>
        const res = await findAllApi({
          page: page.currentPage,
          limit: page.pageSize,
        });
        return {
          result: res.items,
          page: {
            total: res.meta.totalPages,
          },
        };
      },
    },
  },
  columns: [
    { type: 'seq', width: 70, showOverflow: true },
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
});

const mergeGridOptions = computed(() => ({
  ...defaultGridOptions,
  ...props.gridOptions,
}));
</script>

<template>
  <vxe-grid v-bind="mergeGridOptions">
    <template #form>
      <BaseForm v-bind="formConfig" />
    </template>
  </vxe-grid>
</template>

<style scoped>
:deep(.vxe-table--main-wrapper) {
  height: calc(100% - 48px) !important;
}
</style>
