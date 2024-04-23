<template>
  <div> <parent></parent></div>
</template>

<script setup lang="tsx">
  import { ref } from 'vue';

  const msg = ref('这是父组件');
  const Parent = () => {
    return (
      <div>
        {msg.value}
        {msg.value}
      </div>
    );
  };
</script>

<style scoped></style>
