class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'nihao',
            age: 18
        }
    }
    handClick() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render(){
        return (
            <div>
                <h1>这是props的实现，this.props表示传来的数据，
                    使用this.props.xxx来取得数据==> {this.props.name}</h1>
                <h2>{this.state.age}</h2>
                <br/>
                <button onClick={(e) => this.handClick(e)}>加一岁</button>
            </div>
        )
    }
}

class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(props){
        return (
            <h3>{this.props.title}</h3>
        )
    }
}

// 简单的组件组合1： 在组价里直接引用组件
class App extends React.Component{
    render(){
        return (
            <div>
                <Title title="title test"/>
                <Component/>
            </div>
        )
    }
}

// ReactDOM的用法
ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('app')
)

// 容器组件
class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render(props){
        return (
            <h3>{this.props.children}</h3>
        )
    }
}

class App extends React.Component{
    render(){
        return (
            <div>
                <Title>
                    <span>容器式组件写法，利用children</span>
                    <span>可以随便在title组件中添加文案</span>
                </Title>
                <br/>
                <Component/>
            </div>
        )
    }
}
