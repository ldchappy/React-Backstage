常见Router
1.页面Router -- 整个页面重新加载
2.Hash Router -- Hash值变化，页面不刷新(单页应用)
3.H5 Router -- 利用路径值

------页面Router
window.location.href = '这是一个页面Router'
history.back()

------Hash Router
window.location = '#hash'
window.onhashchange = function(){
    console.log(window.location.hash)
}
window.location.hash

------H5 Router
history.pushState('name','title','/path')
history.replaceState('test','title','#test')
history.onpopstate = function(){
    console.log(window.location.href) // 全路径
    console.log(window.location.pathname) // 绝对路径
    console.log(window.location.hash) // hash
    console.log(window.location.search)
}


React-Router
<BrowserRouter>/<HashRouter>, 路由方式
<Route>, 路由规则
<Switch>, 路由选项
<Link>/<NavLink>, 跳转导航
<Redirect>, 自动跳转

npm i react-router-dom@4.2.2 --save-dev
~~~
----------HashRouter---------
import { HashRouter as Router, Route, Link } from 'react-router-dom'
class A .....
class B .....
class Wrapper extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <Link to='/a'>组件A</Link>
                <Link to='/b'>组件B</Link>
                {this.props.children}
            </div>
        )
    }
}

<Router>
    <Wrapper>
        <Route path='/a' component={A} />
        <Route path='/b' component={B} />
    </Wrapper>
</Router>

效果： url路径上有 #/a  或  #/b

如果上面是用 BrowserRouter
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
效果： url路径上有 /a  或  /b
-----直接把url中有/a的复制出来，会出现404
~~~

带有参数的跳转
~~~
<Link to='/a/123'>带参数的组件A</Link>

在组件 A 中取得参数 {this.props.match.params.id}

<Router>
    <Wrapper>
        <Route path='/a/:id' component={A} /> // -----
        <Route path='/b' component={B} />
    </Wrapper>
</Router>
~~~

带有参数和不带参数跳转在同一个页面的区分
~~~
<Link to='/a'>组件A</Link>
<br/>
<Link to='/a/123'>带参数的组件A</Link>
<br/>

在组件 A 中
return(
<div>
    Component A
    <Switch>
        <Route exact path={`${this.props.match.path}`}
            render={(route) => {
                return <div>当前组件是带不参数的组件A</div>
            }}
        />
        <Route path={`${this.props.match.path}/:id`}
            render={(route) => {
                return <div>当前组件是带参数的组件A： {route.match.params.id}</div>
            }}
        />
    </Switch>
</div>
)

<Router>
    <Wrapper>
        <Route path='/a' component={A} /> // -----
        <Route path='/b' component={B} />
    </Wrapper>
</Router>
~~~
带有参数和真正的子组件跳转在同一个页面的区分
~~~
<Link to='/a/123'>带参数的组件A</Link>
<br/>
<Link to='/a/sub'>子组件sub</Link>
<br/>

在组件 A 中
return(
<div>
    Component A
    <Switch>
        <Route path={`${this.props.match.path}/sub`}
            render={(route) => {
                return <div>当前组件是子组件sub</div>
            }}
        />
        <Route path={`${this.props.match.path}/:id`}
            render={(route) => {
                return <div>当前组件是带参数的组件A： {route.match.params.id}</div>
            }}
        />
    </Switch>
</div>
)

<Router>
    <Wrapper>
        <Route path='/a' component={A} /> // -----
        <Route path='/b' component={B} />
    </Wrapper>
</Router>
~~~
