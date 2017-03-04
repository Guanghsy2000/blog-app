var express = require('express')
var routes = express.Router()
var BolgContentDal = require('../method/bolg-content').BolgContentDal
var db = new BolgContentDal()


routes.get('/show',function (req,res) { 
    db.getData({},function (data) { 
        res.render('bolg-show/show',{data:data})
     })
 })

routes.get('/list/:id',function (req,res) { 
    db.findById(req.params.id,function (data) { 
        res.json({data:data})
     })
 })








module.exports = routes