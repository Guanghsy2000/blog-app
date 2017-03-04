var express = require('express')
var routes = express.Router()
var BolgTypeDal = require('../method/bolg_type').BolgTypeDal
var BolgContentDal = require('../method/bolg-content').BolgContentDal
var dbType = new BolgTypeDal()
var db = new BolgContentDal()
multer = require('multer')
const storagec = multer.diskStorage({
        destination:'src/image',
        filename:function(req,file,cb){
            var time = new Date().getTime()
            cb(null,`${time}.jpg`)

        }
    })

//    添加配置文件到multer对象
   upLoads= multer({storage:storagec})




//内容展示区域获取数据
routes.get('/list',function (req,res) {  
    var filter = {}
    if(req.query.search){
        filter.label = req.query.search
        //正则表达式, new RegExp创建一个正则实例, i执行对大小写不敏感的匹配
        filter.label = new RegExp(req.query.search,"i")
    }
    console.log(filter)
    db.getData(filter,function(data){
        res.render('bolg-content/list',{data:data})
    })
})

routes.get('/add',function (req,res) {  
    
    dbType.getData({},function(data){
        res.render('bolg-content/add',{data,data})
    })

})


//内容编辑提交新内容
routes.post('/add',upLoads.single('img'),function(req,res){
    var data = req.body
    data.img = req.file.filename
    // console.log(data)
    db.save(data,function(isOK){
        if(isOK){
            res.json({status:'y',data:'编辑成功'})
        }else{
            res.json({status:'n',data:'出现错误'})
        }
    })

})

// 删除数据
routes.post('/remove/:id',function (req,res) {  
   var id = req.params.id
    db.removeData(id,function (data) { 
        res.redirect('/bolg-content/list')
     })
})

// 获取要修改的数据
routes.get('/update/:id',function (req,res) { 
    var id = req.params.id
    db.findById(id,function (data) {  
        res.render('bolg-content/update',{data:data})
    })

 })

//更新数据
 routes.post('/update/:id',upLoads.single('img'),function (req,res) {  
     var id = req.params.id
     var modal = req.body
     if(req.file){
        modal.img = req.file.filename
     }
     
     db.undateData(id,modal,function (isOK) { 
         if(isOK){
             res.json({status:'y',data:'修改成功'})
         }
         else{
             res.json({status:'n',data:'修改失败'})
         }
      })
     
 })








module.exports = routes