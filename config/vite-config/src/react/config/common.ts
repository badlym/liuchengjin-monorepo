import { type UserConfig } from 'vite'

const commonConfig: UserConfig = {
  server: {
    host: true,
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
    },
  },
}

export { commonConfig }
