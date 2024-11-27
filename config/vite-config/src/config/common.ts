import { type UserConfig } from 'vite';

const commonConfig: UserConfig = {
  server: {
    host: true,
    proxy: {
      // '/video-api': {
      //   target: 'https://test1.firecom.com.cn:18080',
      //   changeOrigin: true,
      //   ws: true,
      //   rewrite: (path) => path.replace(/^\/video-api/, ''),
      //   // only https
      //   secure: true,
      //   configure: (proxy, options) => {
      //     console.log(proxy, 'proxy实例');
      //     // proxy 是 'http-proxy' 的实例
      //   },
      // },
      '/api': {
        target: 'http://localhost:6060',
        changeOrigin: true,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      // TODO: Prevent memory overflow
      maxParallelFileOps: 3,
    },
  },
};

export { commonConfig };
