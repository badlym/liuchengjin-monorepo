<script lang="ts" setup>
import formCreate from '@form-create/ant-design-vue';
import { computed, defineEmits, reactive } from 'vue';
const props = withDefaults(
  defineProps<{
    formConfig?: {
      rule?: any[];
      option?: Record<string, any>;
      [key: string]: any;
    };
  }>(),
  {
    formConfig: () => ({}),
  },
);
const emit = defineEmits<{
  (e: 'submit', formData: Record<string, any>): void;
}>();
const fApi = reactive({});

const defaultFormOptions = reactive({
  rule: [
    {
      type: 'input',
      field: 'name',
      title: '用户姓名',
      value: '',
      col: {
        span: 18, // 调整输入框宽度，留出按钮空间
      },
      wrap: {
        labelCol: { span: 4 },
        wrapperCol: { span: 18 },
      },
    },
  ],
  option: {
    row: {
      show: false,
    },
    // 设置表单整体布局
    form: {
      layout: 'inline', // 使用内联布局，让元素在同一行
      labelAlign: 'right',
    },
    // 设置提交按钮
    submitBtn: {
      show: true,
      innerText: '查询',
      col: { span: 3 },
    },
    // 设置重置按钮
    resetBtn: {
      show: true,
      col: { span: 3 },
    },
    onSubmit: (formData) => {
      emit('submit', formData);
    },
  },
});

const mergeFormOptions = computed(() => {
  const { rule = [], option = {}, ...rest } = props.formConfig || {};

  return {
    rule: [...defaultFormOptions.rule, ...rule],
    option: { ...defaultFormOptions.option, ...option },
    ...rest,
  };
});
</script>

<template>
  <form-create v-model:api="fApi" v-bind="mergeFormOptions" />
</template>

<style scoped lang="less">
/* 调整表单底部元素的样式 */
:deep(.fc-form-footer) {
  margin-top: 0;
  padding-top: 0;
  display: inline-flex;
  align-items: center;
}
</style>
