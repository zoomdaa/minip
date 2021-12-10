import { Component } from 'react'
// import { Provider } from 'react-redux'
// import store from 'src/redux'
import './app.scss'

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  onLaunch(options) {
    console.log(options)
  }

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
