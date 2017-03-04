var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/bolg_manage')


class DBBase{
    constructor(model){
        this.model = model
    }

    // 保存数据
    save(m,callback){
        var data = new this.model(m)
        data.save()
            .then(callback(true))
            .catch(err=>{
                console.log(err)
            })
    }

    // 获取数据
    getData(filter,callback){
        this.model.find(filter)
            .then(function (res) {  
                callback(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }

    // 删除数据
    removeData(id,callback){
        this.model.findByIdAndRemove(id)
            .then(callback(true))
            .catch(err=>{
                console.log(err)
                callback(false)
            })
    }


    // 通过id寻找数据
    findById(id,callback){
        this.model.findByIdAndUpdate(id)
            .then(function (res) {  
                callback(res)
            })
            .catch(err=>{
                console.log(err)
            })
    }



    // 更新数据
    undateData(id,model,callback){
        this.model.findByIdAndUpdate(id,model)
            .then(callback(true))
            .catch(err=>{
                console.log(err)
                callback(false)
            })
    }



}

module.exports = {DBBase:DBBase,mongoose:mongoose}


