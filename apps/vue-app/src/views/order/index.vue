<script lang="ts" setup>
import SvgIcon from '@/components/svg-icon/SvgIcon.vue';

onMounted(() => {
  function red() {
    return new Promise((resolve) => {
      console.log('红灯亮');
      setTimeout(() => {
        console.log('红灯灭');
        resolve();
      }, 3000);
    });
  }

  function green() {
    return new Promise((resolve) => {
      console.log('绿灯亮');
      setTimeout(() => {
        console.log('绿灯灭');
        resolve();
      }, 1000);
    });
  }

  function yellow() {
    return new Promise((resolve) => {
      console.log('黄灯亮');
      setTimeout(() => {
        console.log('黄灯灭');
        resolve();
      }, 2000);
    });
  }

  function trafficLight() {
    Promise.resolve().then(red).then(green).then(yellow).then(trafficLight); // 循环调用
  }

  // 启动交通灯序列
  trafficLight();
});
</script>
<template>
  <div>
    order

    <SvgIcon name="icon-config" />
  </div>
</template>
<style scoped></style>
