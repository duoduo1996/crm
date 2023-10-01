const { Controller } = require("egg");

class ProductController extends Controller{
    async listProducts(){
        const { ctx, service } = this;
        const keyWord = ctx.query.keyword;
        const products = await service.product.findProducts(keyWord);
        ctx.body = products;
    }
}

module.exports = ProductController