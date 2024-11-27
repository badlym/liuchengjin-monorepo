import { defineApplicationConfig } from '@liuchengjin/vite-config';

export default defineApplicationConfig(() => {
  return {
    overrides: {
      server: {
        port: 3301,
      },
    },
  };
}) as any;
