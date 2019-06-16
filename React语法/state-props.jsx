// state例子
class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'constructor(){super(props)}'
        }
    }
    render(){
        return <h1>这是state的实现，state表示数据，使用this.state.xxx来取得状态数据==> {this.state.name}</h1>
    }
}

// 改变state的方法，this.setState()
class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name : 'constructor(){super(props)}'
        }
    }
    render(){
        setTimeout(() =>{
            this.setState({
                name: '使用了this.setState()来改变state'
            })
        }
        ,3000)
        return <h1>这是state的实现，state表示数据，使用this.state.xxx来取得状态数据==> {this.state.name}</h1>
    }
}

// props的实现
class Component extends React.Component{
    render(){
        return <h1>这是props的实现，this.props表示传来的数据，
            使用this.props.xxx来取得数据==> {this.props.name}</h1>
    }
}

// ReactDOM的用法
ReactDOM.render(
    <div>
        <Component name={123456}/>
    </div>,
    document.getElementById('app')
)