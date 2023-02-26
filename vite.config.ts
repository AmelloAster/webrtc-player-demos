import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';
import { OUTPUT_DIR } from './build/constant';

// https://vitejs.dev/config/
export default (): UserConfig => {
  return {
    base: '/',
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@components': path.resolve(__dirname, './src/components'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@enums': path.resolve(__dirname, './src/enums'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@#': path.resolve(__dirname, './types')
      }
    },
    plugins: [react()],
    build: {
      target: 'es2015',
      cssTarget: 'chrome80',
      outDir: OUTPUT_DIR,
      // minify: 'terser',
      /**
       * 当 minify=“minify:'terser'” 解开注释
       * Uncomment when minify="minify:'terser'"
       */
      // terserOptions: {
      //   compress: {
      //     keep_infinity: true,
      //     drop_console: VITE_DROP_CONSOLE,
      //   },
      // },
      // Turning off brotliSize display can slightly reduce packaging time
      chunkSizeWarningLimit: 2000
    }
  };
};
