import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tsConfigPaths from 'vite-plugin-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), tailwindcss(), tsConfigPaths()],
    server: {
      host: true,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_SERVER_URL_API || 'http://localhost:9000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@constants': path.resolve(__dirname, './src/constants'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@i18n': path.resolve(__dirname, './src/i18n'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@redux': path.resolve(__dirname, './src/redux'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@types': path.resolve(__dirname, './src/types'),
        '@data': path.resolve(__dirname, './src/data'),
        '@config': path.resolve(__dirname, './src/config'),
      },
    },
  }
})
