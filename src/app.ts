import { Component } from 'react'
import { Provider } from 'react-redux'
import store from 'src/redux'
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
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
