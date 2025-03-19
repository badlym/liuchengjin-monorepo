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
    },
  ],
  option: {
    onSubmit: (formData) => {
      emit('submit', formData);
    },
    resetBtn: { show: true },
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
