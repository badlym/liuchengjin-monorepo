<script lang="ts" setup>
import type { VxeGridInstance, VxeGridProps } from 'vxe-table';
import { computed, reactive, ref, toRaw } from 'vue';
import { findAllApi } from '/@/api/core/user';
const props = withDefaults(
  defineProps<{
    gridOptions?: VxeGridProps;
    formConfig?: Record<string, any>;
    queryApi?: (params: any) => Promise<any>;
  }>(),
  {
    gridOptions: () => ({}),
    formConfig: () => ({}),
    queryApi: () => Promise.resolve({ items: [], meta: { totalPages: 0 } }),
  },
);
const gridRef = useTemplateRef<VxeGridInstance>('gridRef');
// 存储表单查询参数
const formParams = ref<Record<string, any>>({});
const defaultGridOptions = reactive<VxeGridProps<any>>({
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
        const res = await props.queryApi({
          page: page.currentPage,
          limit: page.pageSize,
          ...formParams.value, // 添加表单参数到查询中
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
    // { type: 'seq', width: 70, showOverflow: true },
    // { field: 'name', title: '姓名', showOverflow: true },
    // {
    //   field: 'sex',
    //   title: '性别',
    //   showOverflow: true,
    //   formatter: ({ cellValue }) => (cellValue === '0' ? '男' : '女'),
    // },
    // { field: 'age', title: '年龄', showOverflow: true },
    // { field: 'email', title: '邮箱', showOverflow: true },
  ],
});
const handleSubmit = (formData: Record<string, any>) => {
  // 在提交表单时更新查询条件
  formParams.value = formData;
  // 刷新表格
  gridRef.value?.commitProxy('reload');
};

const mergeGridOptions = computed(() => ({
  ...defaultGridOptions,
  ...props.gridOptions,
}));
</script>

<template>
  <vxe-grid ref="gridRef" v-bind="mergeGridOptions">
    <template #form>
      <a-card style="margin-bottom: 20px">
        <BaseForm v-bind="formConfig" @submit="handleSubmit" />
      </a-card>
    </template>
  </vxe-grid>
</template>

<style scoped>
:deep(.vxe-table--main-wrapper) {
  height: calc(100% - 48px) !important;
}
</style>
