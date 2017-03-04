var db = require('./db')
var DBBase = db.DBBase
var mongoose = db.mongoose
var Schema = mongoose.Schema


var bolgContentSchema = new Schema({
    title:String,   //标题
    sort:String,   //分类
    synopsis:String, //简介(概要)
    label:String,  //标注
    img:String,    //缩略图
    content:String  //详情
})


var BolgContent = mongoose.model('bolg_content',bolgContentSchema)

class BolgContentDal extends DBBase{
    constructor(){
        super(BolgContent)
    }
}



module.exports = {
    BolgContent:BolgContent,
    BolgContentDal:BolgContentDal
}