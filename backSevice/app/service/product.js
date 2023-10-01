const { Service } = require("egg");

class ProductsService extends Service{

    async findProducts(keyWords){
        const client = this.app.mysql;

        if(!keyWords){
            return await client.query('select id, name, price, imgurl from products')
        } else {
            return await client.query('select id, name, price, imgurl from products where name like ?', ['%${keyWord}%'])
        }
    }
}

module.exports=ProductsService