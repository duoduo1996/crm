'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/products', controller.product.listProducts);
  
  // 添加一个路由处理头像上传请求
  router.post('/api/upload/headpic', controller.userInforImg.headPicUpdate);
};
