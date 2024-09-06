// import UnoCSS from 'unocss/vite'
import { type UserConfig } from 'vite'

const commonConfig: UserConfig = {
  server: {
    host: true,
    // proxy: {
    //   '/video-api': {
    //     target: 'https://test1.firecom.com.cn:18080',
    //     changeOrigin: true,
    //     ws: true,
    //     rewrite: (path) => path.replace(new RegExp(`^/video-api`), ''),
    //     // only https
    //     secure: true,
    //     configure: (proxy, options) => {
    //       console.log(proxy, 'proxy实例')
    //       // proxy 是 'http-proxy' 的实例
    //     },
    //   },
    //   // '/upload': {
    //   //   target: 'http://localhost:3300/upload',
    //   //   changeOrigin: true,
    //   //   ws: true,
    //   //   rewrite: (path) => path.replace(new RegExp(`^/upload`), ''),
    //   // },
    // },
  },
  // esbuild: {
  //   drop: ['debugger'],//
  // },
  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      // TODO: Prevent memory overflow
      maxParallelFileOps: 3,
      external: ['mobx-react-lite'],
      output: {
        globals: {
          'mobx-react-lite': 'mobxReactLite',
        },
      },
    },
  },
  // plugins: [UnoCSS()],
}

export { commonConfig }
