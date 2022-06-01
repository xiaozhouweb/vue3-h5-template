# vue-h5-template
### 使用

npm install

npm run dev

### 用于创建vue h5 模板

技术栈

- **Vue3-Typescript-Vite** 

- Vue-router

- Vuex

- postcss-px-to-viewport-8-plugin 

  **px自动转换vw**  ：  postcss.config.js配置

- vant vite-plugin-style-import

  自动导入 vant css

  ```typescript
  import styleImport, { VantResolve } from 'vite-plugin-style-import'
  
  plugins: [
    styleImport({
      resolves: [VantResolve()],
    }),
  ]
  ```

  

 
