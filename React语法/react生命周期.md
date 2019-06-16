生命周期节点
Mounting: 挂载阶段
Updating: 运行时阶段
Unmounting: 卸载阶段
Error-Handling: 错误处理阶段

~~~
class Component extends React.Component{
    constructor(props){
        super(props)
        this.state={ data: 'old' }
        console.log('初始化数据-constructor')
    }
    componentWillMount(){
        console.log('componentWillMount-组件将要加载-逻辑进行-异步方法')
    }
    componentDidMount(){
        console.log('componentDidMount-组件加载(渲染)完成时')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps-将要接收父组件传来的props')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate-判断子组件是否应该更新')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate-组件将要更新-')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate-组件更新完成')
    }
    onhandle(){
        console.log('更新数据')
        this.setState({
            data: 'new'
        })
    }
    render(){
        console.log('render-渲染组件')
        return (
            <div>
                <p>app</p>
                <button onClick={ () => this.onhandle()}>更新状态</button>
            </div>
        )
    }
}
~~~
~~~
初始化数据-constructor
componentWillMount-组件将要加载-逻辑进行-异步方法
render-渲染组件
componentDidMount-组件加载(渲染)完成时
----上面四个是还没按更新状态的初始------
更新数据
shouldComponentUpdate-判断子组件是否应该更新 -- 为true --> 执行下面
componentWillUpdate-组件将要更新-
render-渲染组件
componentDidUpdate-组件更新完成
----上面四个是按了更新状态的数据变化------
~~~

=================更改父组件状态=======================
~~~
class Component extends React.Component{
    constructor(props){
        super(props)
        this.state={ data: 'old' }
        console.log('初始化数据-constructor')
    }
    componentWillMount(){
        console.log('componentWillMount-组件将要加载-逻辑进行-异步方法')
    }
    componentDidMount(){
        console.log('componentDidMount-组件加载(渲染)完成时')
    }
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps-将要接收父组件传来的props')
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate-判断子组件是否应该更新')
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate-组件将要更新-')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate-组件更新完成')
    }
    onhandle(){
        console.log('更新数据')
        this.setState({
            data: 'new'
        })
    }
    render(){
        console.log('render-渲染组件')
        return (
            <div>
                <p>app</p>
                <button onClick={ () => this.onhandle()}>更新状态</button>
            </div>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state={ data: 'old' }
        console.log('初始化数据-constructor')
    }
    onChangeProps(){
        this.setState({
            data: 'new data'
        })
    }
    render(){
        return(
            <div>
                <Component data={this.state.data} />
                <button onClick={ () => this.onChangeProps()}>更改props</button>
            </div>
        )
    }
}
~~~
~~~
初始化数据-constructor
初始化数据-constructor
componentWillMount-组件将要加载-逻辑进行-异步方法
render-渲染组件
componentDidMount-组件加载(渲染)完成时
----上面四个是还没按父组件传状态的初始------
componentWillReceiveProps-将要接收父组件传来的props
shouldComponentUpdate-判断子组件是否应该更新 -- 为false --> 没有执行下面
----上面二个是按了父组件传状态的数据------
~~~

============销毁组件============
~~~
componentWillUnmount(){
    console.log('componentWillUnmount-组件将要销毁')
}

<button onClick={ () => this.onDestoryChild()}>销毁子组件</button>
onDestoryChild(){
    console.log('干掉子组件')
    this.setState({
        hasChild: false
    })
}

干掉子组件
componentWillUnmount-组件将要销毁
~~~