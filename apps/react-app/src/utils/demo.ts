export enum SectionEnum {
  原创构思内容 = '_abs',
  细分领域 = '_abs##tecf',
  创新背景 = '_abs##tecb',
  技术构思 = '_abs##desc',
  实施案例 = '_abs##inve',
  技术领域 = 'clam##tecf',
  背景技术 = 'clam##tecb',
  发明内容 = 'clam##desc',
  具体实施方式 = 'clam##inve',
  权利要求书内容 = 'clam',
}
/* 高亮文字-> 从左边到右边*/
const example1 = {
  request: {
    query: {
      section: 'abs',
      selectedText: '',
      scoreThreshold: 0.7,
    },
    answer: [{ section: '_abs##tecf', fullText: '' }],
  },
  response: {
    data: [
      {
        highlightLevel: 1,
        highlightText: '一种含有全脂米糠、粕、酒糟和玉米蛋白粉的益生菌肉鸡饲料及其制备方法',
        section: '_abs##tecf',
      },
      {
        highlightLevel: 1,
        highlightText: '一种含有全脂米糠、粕、酒糟和玉米蛋白粉的益生菌肉鸡饲料及其制备方法',
        section: '_abs##tecf',
      },
      {
        highlightLevel: 1,
        highlightText: '一种含有全脂米糠、粕、酒糟和玉米蛋白粉的益生菌肉鸡饲料及其制备方法',
        section: '_abs##tecf',
      },
    ],
  },
};
/* 高亮文字 -> 从右边到左边 */
const example2 = {
  request: {
    query: {
      section: '_abs##tecf',
      selectedText: '',
      scoreThreshold: 0.7,
    },
    answer: [{ section: 'desc##clam', fullText: '' }],
  },
  response: {
    data: [
      {
        highlightLevel: 1,
        highlightText: '一种含有全脂米糠、粕、酒糟和玉米蛋白粉的益生菌肉鸡饲料及其制备方法',
        section: 'desc##clam',
      },
      {
        highlightLevel: 1,
        highlightText: '一种含有全脂米糠、粕、酒糟和玉米蛋白粉的益生菌肉鸡饲料及其制备方法',
        section: 'desc##clam',
      },
      {
        highlightLevel: 1,
        highlightText: '一种含有全脂米糠、粕、酒糟和玉米蛋白粉的益生菌肉鸡饲料及其制备方法',
        section: 'desc##clam',
      },
    ],
  },
};
/* 查找相似句段*/
const example3 = {
  request: {
    query: {
      section: '_abs##tecf',
      selectedText: '',
    },
  },
  /* patentId 为es里边的_id 不是公开号*/
  response: [{ patentId: '', patentTitle: '', patentPart: '', patentPartContent: '' }],
};
