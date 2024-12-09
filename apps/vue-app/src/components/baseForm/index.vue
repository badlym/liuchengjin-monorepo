<script lang="ts" setup>
import formCreate from '@form-create/ant-design-vue';

const props = withDefaults(
  defineProps<{
    formConfig?: formCreate;
  }>(),
  {
    formConfig: () => ({}),
  },
);
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
      alert(JSON.stringify(formData));
    },
    resetBtn: { show: true },
  },
});

const mergeFormOptions = computed(() => ({
  ...defaultFormOptions,
  ...props.formConfig,
}));
</script>

<template>
  <form-create v-model:api="fApi" v-bind="mergeFormOptions" />
</template>
