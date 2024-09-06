
/** 统一使用包装过的版本，方便统一 seed */
function random() {
  return Math.random();
}

/** 包含取整数范围 */
export function range(min: number, max: number) {
  return Math.ceil(random() * (max - min + 1) - 1 + min);
}

/** 从数据里面随机取一个 */
export function pick(arr: any[]) {
  return arr[range(0, arr.length - 1)];
}

/** 制作数组 */
export function makeArr(n: number) {
  return (new Array(n)).fill(undefined);
}

/** 模拟延时，单位秒；常用于 async api mock 或者 MST flow */
export function sleep(seconds: number) {
  return new Promise((resolve) => setTimeout(resolve, seconds));
}
