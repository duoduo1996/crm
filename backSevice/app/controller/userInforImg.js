const { Controller } = require("egg");

class userInforImgControl extends Controller{
    async headPicUpdate(){
        const path = require('path');
        const fs = require('fs');

        const { ctx } =this;
        let userId = ctx.request.body.userId;
        const file = ctx.request.files[0];

        // 生成路径名
        const toFileName = '/public/upload/' + Date.now() + file.filename;
        const to = path.dirname(__dirname) + toFileName;

        // 拷贝图片至本地
        await fs.copyFileSync(file.filepath, to);

        // 返回前端路径
        const newUrl = "http://localhost:3306" + toFileName;

        // 存储到数据库
        const results = await this.app.mysql.query('update user set headPicPath = ? where userId = ?', [newUrl, userId]);
        ctx.body = {
            msg: '图片上传成功',
            url: newUrl
        }
    }
}

module.exports = userInforImgControl