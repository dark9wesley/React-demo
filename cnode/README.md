# 前言

这是一篇很简单的实战，不涉及Redux，非常适合初学者。

本文用的是class式的写法，当然接下来也会用函数式重写一遍。

需要看更仔细的描述可查看发布在掘金上的文章

[掘金](https://juejin.im/post/6866433022627938318#heading-18)

# 技术栈
`react` + `react-router` + `axios`+ `antd`

# 实现效果

![效果](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae56e31ed7bb465c8c438d935b4e26cf~tplv-k3u1fbpfcp-zoom-1.image)

# 项目结构

```
|-cnode 项目名
    |-node_modules  依赖包
    |-public  
    |-src  
        |-components    组件目录
            |-articlelist		首页文章列表组件
            |-articlelistmenu   首页文章导航组件
            |-detailmain        文章详情主体组件
            |-detailreply       文章详情回复组件
            |-usertopic      	用户详情组件
        |-pages         页面
            |-home          首页
            |-detail        文章详情页
            |-user        	用户详情页
        |-routes        路由配置
        |-utils         工具类
       	|-App.css		页面样式
        |-App.jsx       主页面
        |-index.js      入口文件
    packjon.json     全局配置
    README.md        readme文件
```

# 功能实现

## 路由配置
首先是路由配置，虽然只有三个页面，但是为了结构清晰，且培养好的编码习惯，还是将路由配置抽离出来。

这里我将项目的路由配置文件放在routes文件下，然后在App.js中引入，并map循环遍历出来。

### 路由配置文件

src => routes => index.js


### App.jsx

src => App.jsx

## 首页

src => pages => home

首页主要包括导航和文章列表两个组件。

menuList , colorList这两个配置文件是为了循环渲染出5个导航，并根据不同的导航渲染不同的图标。 

### 导航组件

src => component => articlelistmenu 

将初始导航状态存在state里的tab里，并在componentDidMount之后将父组件传进来的tab设为state里的tab。

将父组件传进来的menuList循环遍历成5个导航，因为menuList是一个对象，所以这里使用Object.entries方法。这个方法可以将对象设为二维数组并返回。

tips：这里有个两个小坑。

	1.导航选中一项后，刷新页面，会发现路由没变，但是导航的选中状态变为了[全部]
	2.导航的选中状态不会随着点击而实时改变
解决方法：
	
    1.原因是使用了antd的Menu组件，并设置了defaultSelectedKeys，将defaultSelectedKeys修改为selectedKeys就好了
    2.同样是Menu组件的原因，设置onSelcct，通过onSelcct触发的回调函数更改state里的tab值即可

### 文章列表组件

src => component => articlelist

主要作用是通过点击导航列表里的不同项，加载不同类型的文章列表，并渲染在页面上。

在这个组件里将数据请求封装在了getData方法里，并在componentDidMount组件挂载完成后触发。

tips：这里也有个小坑，就是点击不同的导航项，路由改变，但列表数据并不会重新渲染。

摸索后发现原因是数据请求只在componentDidMount里触发了一次，要在shouldComponentUpdata里通过对比props传入的tab，不同则再请求一次数据来触发页面更新。

## 文章详情页

src => pages => detail

文章详情页主要包括文章主体和文章回复两个组件。

在componentDidMount组件挂载完毕后请求数据，并将数据传递给两个子组件。

### 文章主体内容组件

src => component => detailmain

这个组件UI采用的是antd的Card,接受到父组件传递过来的数据后进行展示。

由于数据中的内容部分接受到的是Dom结构的数据，所以采用dangerouslySetInnerHTML来加载内容。

### 文章回复内容组件

src => component => detailreply

这个组件在文章回复量为0的时候不展示。

由于数据中的内容部分接受到的是Dom结构的数据，所以采用dangerouslySetInnerHTML来加载内容。

## 用户详情页

src => pages => user

用户详情页主要包括用户信息、用户最近创建的话题、用户最近回复的话题三个部分。

用户信息内容直接用antd的Card组件的title配合Descriptions组件来完成。

由于最近创建的话题和最近回复的话题两部分非常相似，所以采用同一个组件配合父组件传入的不同数据来完成。

**tips：**这里有个坑，我摸索了很久才解决。在最近回复的话题点击其他用户的头像，路由改变但是页面不会重新渲染。

经过摸索和google发现也是由于数据只在component里只请求了一次，所以页面不会更新。

在componentDidUpdate对比前后props再请求一次数据即可。

### 用户最近创建的话题和用户最近回复的话题

src => component => usertopic

这两个部分只是数据上有差别。主体都是相似的。


# 结语

虽然项目看起来简单，但是自己写起来还是碰到不少问题。不断的通过google和看文档来解决一个又一个坑，并牢记不再踩也是成长的一部分。

尤其是相同页面但是参数不同页面不重新渲染的坑，以后要牢记。

**不能只在componentDidMount里只请求一次数据，要在shouldComponentUpdate或componentDidUpdate通过对比前后props来请求一次数据。**

最后，项目还有很多需要完善和改进，如果有错误或者可以优化的地方，欢迎各位大佬指点一二。

**最后的最后，臭不要脸的求一个STAR**😋
