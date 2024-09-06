function at(n: number) {
	n = Math.trunc(n) || 0;
	if (n < 0) n += this.length;
	if (n < 0 || n >= this.length) return undefined;
	return this[n];
}

function hasOwn(obj: object, propName: PropertyKey) {
  return Object.prototype.hasOwnProperty.call(obj, propName);
}

for (const C of [Object]) {
  Object.defineProperty(C.prototype, 'hasOwn', {
    value: hasOwn,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

for (const C of [Array, String]) {
  Object.defineProperty(C.prototype, 'at', {
    value: at,
    writable: true,
    enumerable: false,
    configurable: true,
  });
}

declare global {
  interface Array<T> {
    /** 提供 es2022 数组 .at() */
    at: (n: number) => T | undefined,
  }

  interface String {
    /** 提供 es2022 字符串 .at() */
    at: (n: number) => string | undefined,
  }

  interface Object {
    hasOwn: (object: object, key: PropertyKey) => boolean;
  }
}
