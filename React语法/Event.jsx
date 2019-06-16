// 第一种事件绑定的写法 -- bind(this)
class Component extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'nihao',
            age: 18
        }
        this.handClick = this.handClick.bind(this) // 需要绑定this
    }
    handClick() { // 事件的绑定与点击
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
                {/* 事件的绑定与点击 */}
                <button onClick={this.handClick}>加一岁</button>
            </div>
        )
    }
}

// 第二种事件绑定的写法 -- 使用箭头函数
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
                {/* 这里使用了箭头函数，so，上面不用bind(this) */}
                <button onClick={(e) => this.handClick(e)}>加一岁</button>
            </div>
        )
    }
}

// 第三种事件绑定的写法 -- 属性初始化器语法
class LoggingButton extends React.Component {
    handleClick = () => {
      console.log('this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me
        </button>
      );
    }
  }