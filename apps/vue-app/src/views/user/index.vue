<script lang="ts" setup>
import { findAllApi } from '/@/api/core/user';
</script>
<template>
  <div class="">
    <BaseGrid :query-api="findAllApi" />
  </div>
</template>
<style scoped></style>
