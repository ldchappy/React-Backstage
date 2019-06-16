import React from 'react'
import ReactDOM from 'react-dom'

// 函数形式的组件
function Component(){
    return <h1>这是一个组件，一个函数就是一个组件</h1>
}

// es6形式的组件
class ES6Component extends React.Component{
    render(){
        return <h1>这是一个组件，以ES6形式写的组件</h1>
    }
}

// ReactDOM的用法
ReactDOM.render(
    <div>
        <Component/>
        <ES6Component/>
    </div>,
    document.getElementById('app')
)