<script lang="ts" setup>
import { ref } from 'vue';

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['user']);
const router = useRouter();
// const openKeys = ref<string[]>(['user']);
const handleClick = ({ key }: { key: string }) => {
  router.push(key);
};
</script>
<template>
  <a-layout class="h-screen">
    <a-layout-sider
      v-model:collapsed="collapsed"
      collapsible
      mode="inline"
      theme="dark"
    >
      <div class="logo" />
      <a-menu
        v-model:selected-keys="selectedKeys"
        mode="inline"
        theme="dark"
        @click="handleClick"
      >
        <a-menu-item key="/user">user</a-menu-item>
        <a-menu-item key="/order">order</a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout class="h-screen">
      <a-layout-header style="padding: 0; background: #fff" />
      <a-layout-content style="margin: 0 16px">
        <router-view class="page-container" />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgb(255 255 255 / 30%);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
