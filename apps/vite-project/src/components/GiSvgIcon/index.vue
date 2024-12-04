<template>
  <svg
    :class="svgClass"
    :style="{ color, fill: color, width: iconSize, height: iconSize }"
    aria-hidden="true"
    v-bind="$attrs"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

defineOptions({ name: 'GiSvgIcon' });

const props = withDefaults(defineProps<Props>(), {
  name: '',
  color: '',
  size: 20,
});

interface Props {
  name: string;
  color?: string;
  size?: string | number;
}

// 判断传入的值，是否带有单位，如果没有，就默认用px单位
const getUnitValue = (value: string | number): string | number => {
  return /(px|em|rem|%)$/.test(value.toString()) ? value : `${value}px`;
};

const iconSize = computed<string | number>(() => {
  return getUnitValue(props.size);
});

const iconName = computed<string>(() => `#icon-${props.name}`);

const svgClass = computed<string>(() => {
  if (props.name) return `svg-icon icon-${props.name}`;
  return 'svg-icon';
});
</script>

<style lang="scss" scoped>
.svg-icon {
  flex-shrink: 0;
  width: auto;
  height: auto;
  // fill: currentColor;
  vertical-align: middle;
}
</style>
