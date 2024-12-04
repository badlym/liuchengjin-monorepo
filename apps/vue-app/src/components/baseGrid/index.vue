<script setup lang="ts">
import type { VxeGridProps } from 'vxe-table';
import { computed, reactive, withDefaults } from 'vue';
import BaseForm from '../baseForm/index.vue';
defineOptions({
  name: 'BaseGrid',
});
const props = withDefaults(
  defineProps<{
    formOptions?: Record<string, any>;
    gridOptions?: Partial<VxeGridProps>;
  }>(),
  {
    formOptions: () => ({}),
    gridOptions: () => ({}),
  },
);
console.log(props.formOptions);

// 默认配置
const defaultGridOptions: VxeGridProps = {
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' },
  ],
  data: [
    {
      id: 10001,
      name: 'Test1',
      role: 'Develop',
      sex: 'Man',
      age: 28,
      address: 'test abc',
    },
    {
      id: 10002,
      name: 'Test2',
      role: 'Test',
      sex: 'Women',
      age: 22,
      address: 'Guangzhou',
    },
    {
      id: 10003,
      name: 'Test3',
      role: 'PM',
      sex: 'Man',
      age: 32,
      address: 'Shanghai',
    },
    {
      id: 10004,
      name: 'Test4',
      role: 'Designer',
      sex: 'Women',
      age: 24,
      address: 'Shanghai',
    },
  ],
};

const mergedGridOptions = computed<VxeGridProps>(() =>
  Object.assign({}, defaultGridOptions, props.gridOptions),
);
</script>

<template>
  <div>
    <vxe-grid v-bind="mergedGridOptions">
      <template #form>
        <BaseForm />
      </template>
    </vxe-grid>
  </div>
</template>
