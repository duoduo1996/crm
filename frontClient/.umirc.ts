import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  dva: {},
  antd:{},
  proxy:{
    '/api':{
      'target':'http://127.0.0.1:7001/',
      'changeOrigin':true
    }
  },
  fastRefresh: {},
});
