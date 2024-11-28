<script setup>
import { ref } from 'vue';
const fApi = ref({});
const options = {
  onSubmit: (formData) => {
    alert(JSON.stringify(formData));
  },
  resetBtn: true,
};
const rule = [
  {
    type: 'input',
    field: 'goods_name',
    title: '商品名称',
    value: 'form-create',
  },
  {
    type: 'checkbox',
    field: 'label',
    title: '标签',
    value: [0, 1, 2, 3],
    options: [
      { label: '好用', value: 0 },
      { label: '快速', value: 1 },
      { label: '高效', value: 2 },
      { label: '全能', value: 3 },
    ],
  },
];
</script>

<template>
  <form-create
    v-bind="$attrs"
    v-model:api="fApi"
    :rule="rule"
    :option="options"
  />
</template>
