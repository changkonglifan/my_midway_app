/*
 * @Author: XuYang 
 * @Date: 2021-04-25 13:57:16 
 * @Last Modified by:   XuYang 
 * @Last Modified time: 2021-04-25 13:57:16 
 * Token 相关处理
 */

export class Token {
    constructor(data){
        
    }
    //生成token
    async generateToken(data) {
        if (data) {
            this.data = data; // userID
        }
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = fs.readFileSync(path.join(__dirname, './pem/private_key.pem'));//私钥 可以自己生成
        let token = jwt.sign({
            data, // 自定义字段
            exp: created + 60 * 30, // 过期时间 30 分钟
            iat: created, // 创建时间
        }, cert, {algorithm: 'RS256'});
        return token;
    }
}