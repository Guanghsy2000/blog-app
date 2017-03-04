## 个人博客后台管理系统

#### 个人练手项目,主要用nodejs,bootstrap,mongodb
```
项目介绍,运用nodejs和mongodb配合,完成数据库数据的增加,删除,修改,查询,展示.
```

##### 使用:

```
使用前先安装必要的插件
    $npm i
登入界面路由地址:
    http://localhost:3000/login.html  (账号:admin,密码:admin)
登入博客展示界面:
    http://localhost:3000/bolg-show/show.html (不需要登入)
```

##### 效果展示(此图片为gif图,网络延迟会造成卡顿,刷新解决)

![效果展示1](https://github.com/Guanghsy2000/blog-app/blob/master/%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA/demo1.gif)
##### 考虑网络原因,演示图片经过压缩,静态清晰图可以"效果展示"文件夹查看
![效果展示2](https://github.com/Guanghsy2000/blog-app/blob/master/%E6%95%88%E6%9E%9C%E5%B1%95%E7%A4%BA/demo2.gif)

##### method文件夹
```
创建数据库模型,使用ES6 Class类继承的概念
db.js 方法原型文件,所有方法都在此处书写.
bolg_type.js 继承db.js 用于博客分类的操作
bolg_content.js  继承db.js 用于博客内容操作
```

##### routes文件夹
```
这里存放着所有的路由文件
bolg-content.js 所有后台内容操作都走这个文件
bolg-type.js 所有后台分类信息操作都走这个文件
bolg-show.js 所有前台展示页面都走这个文件
```

##### src文件夹
```
这里是静态资源目录
bolg文件夹 : 存放着前台展示页面所需要的一样样式,插件
image文件夹:用户新增或修改上传的图片都存放在这里
main文件夹:存放着后台管理主页面的一些样式,插件
text文件夹:存放着后台内容页面所需要引用的一些样式,插件
login.html 后台管理系统登入界面
```


##### views文件夹
```
视图展示文件
bolg-content:管理后台内容界面
bolg-type:管理后台分类界面
bolg-show:前台展示界面
main.html 管理后台模板界面
```

##### app.js
```
nodejs启动文件,用于将所有文件连接起来
```

##### 效果展示文件夹
```
这里放着服务器跑起来的时候的效果图
```

