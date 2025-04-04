import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async ()=>{
  const UnoCss = await import('unocss/vite').then(i => i.default)

  return {
    resolve: {
      alias: {
        '@': '/src',
        // 'crypto': 'crypto'
      },
    },
    // server: {
    //   https: {
    //     // key: './localhost-key.pem',  // 证书私钥
    //     // cert: './localhost.pem',     // 证书
    //   },
    //   host: 'localhost',  // 确保主机名是localhost
    //   port: 3000,         // 你可以根据需求设置端口
    // },
    plugins: [
      uni(),
      // https://github.com/unocss/unocss
      UnoCss(),
    ],
  }
})