const express = require('express')
const bodyParser = require('body-parser')
// const multer = require('multer')
const cookieParse = require('cookie-parser')
// const fs = require("fs")
// const form = multer()
const app = express()


app.use(express.static('src'))
app.use(cookieParse())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var template = require('art-template');  //模块引入
template.config('base', '');   //配置模版的根目录
template.config('extname', '.html');  //配置后缀名
app.engine('.html', template.__express);  //使用的模版引擎
app.set('view engine', 'html');  //设置使用html模版引擎
app.set('views', __dirname + '/views');  //设置views视图文件的路径


// 管理员用户名
var userName = {
    user:'admin',
    pwd:'admin'
}


app.post('/login',function (req,res) { 
    var userContent = req.body
    if(userContent.user == userName.user){
        if(userContent.pwd == userName.pwd){
            res.json({
                status: 'y',
                data:'登入成功'
            })
        }
        else{
           res.json({
                status: 'n',
                data:'密码错误'
            })
        }
    }else{
        res.json({
                status: 'n',
                data:'用户名错误'
            })
    }
 })

app.get('/main',(req,res)=>{
	res.render('main')
})





app.use('/bolg-type',require('./routes/bolg-type'))
app.use('/bolg-content',require('./routes/bolg-content'))
app.use('/bolg-show',require('./routes/bolg-show'))



app.listen(3000,function(){
    console.log('服务器运行了')
})