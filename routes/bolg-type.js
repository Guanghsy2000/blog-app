var express = require('express')
var routes = express.Router()
var BolgTypeDal = require('../method/bolg_type').BolgTypeDal
var db = new BolgTypeDal()

// 获取跟搜索数据
routes.get('/list',function (req,res) {  

    var filter = {}
    var sortName= ""
    if(req.query.search){
        sortName = req.query.search
         filter.sort = {$regex:new RegExp(sortName)}
    }

  db.getData(filter,function (data) {  
      console.log(data)
      res.render('bolg-type/list',{list:data})
  })

})

routes.get('/add',function (req,res) {  

    res.render('bolg-type/add')

})

//保存数据分类信息数据到数据库
routes.post('/add',function(req,res){
    db.save(req.body,function (isOK) {  
        if(isOK){
            res.redirect('/bolg-type/list')
        }
        else{
            //错误处理
        }
    })
})

routes.post('/remove/:id',function (req,res) {  
   var id = req.params.id


    db.removeData(id,function (data) { 
        res.redirect('/bolg-type/list')
     })
})


// 获取要修改的数据
routes.get('/update/:id',function (req,res) { 
    var id = req.params.id

    db.findById(id,function (data) {  
        res.render('bolg-type/update',{data:data})
    })

 })

//更新数据
 routes.post('/update/:id',function (req,res) {  
     var id = req.params.id
     var modal = req.body
    //  console.log(modal)
     db.undateData(id,modal,function (isOK) { 
         if(isOK){
             res.redirect('/bolg-type/list')
         }
         else{
             //错误处理
         }
      })
     
 })







module.exports = routes