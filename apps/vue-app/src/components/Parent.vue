<template>
  <div> <parent /></div>
  <div>
    <a-button type="primary">
      <template #icon><SearchOutlined /></template>

      按钮</a-button
    >
  </div>
</template>

<script setup lang="tsx">
  import * as process from 'node:process';

  import { SearchOutlined } from '@ant-design/icons-vue';

  import { ref } from 'vue';

  console.log(process.env, '环境');
  const msg = ref('这是父组件');
  const Parent = () => {
    return (
      <div>
        {msg.value}
        <a-button type="primary">
          {{
            icon: () => <SearchOutlined />,
            default: () => '按钮',
          }}
        </a-button>
        <a-input   v-model={msg.value} />
      </div>
    );
  };
</script>

<style scoped></style>
