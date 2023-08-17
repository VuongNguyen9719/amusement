import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src/"),
      "~components": `${path.resolve(__dirname, "./src/components/")}`,
      "~pages": `${path.resolve(__dirname, "./src/pages/")}`,
      "~routes": `${path.resolve(__dirname, "./src/routes/")}`,
      "~common": `${path.resolve(__dirname, "./src/common/")}`,
      "~assets": `${path.resolve(__dirname, "./src/assets")}`,
      "~formControls": path.resolve(__dirname, './src/common/formControls'),
      "~helper": path.resolve(__dirname, './src/common/helper'),
      "~utils": path.resolve(__dirname, './src/common/utils'),
      "~HOC": path.resolve(__dirname, './src/common/HOC'),
      "~hooks": path.resolve(__dirname, './src/common/hooks'),
      "~api": path.resolve(__dirname, './src/api'),
      "~customHook": path.resolve(__dirname, './src/common/custom-hook'),
      "~constants": path.resolve(__dirname, './src/constants'),
      "~reduxStore": path.resolve(__dirname, './src/redux-store'),
    }
  } 
})
 