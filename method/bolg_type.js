var db = require('./db')
var DBBase = db.DBBase
var mongoose = db.mongoose
var Schema = mongoose.Schema


var bolgTypeSchema = new Schema({
    sort:String,   //分类名称
    remind:String   //分类新增备注
})

var BolgType = mongoose.model('bolg_type',bolgTypeSchema)


class BolgTypeDal extends DBBase{
    constructor(){
        super(BolgType)
    }
}





module.exports = {
    BolgType:BolgType,
    BolgTypeDal:BolgTypeDal
}