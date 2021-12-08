import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'
import './index.scss'

export default class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button onClick={() => navigateTo({ url: '/sub/sub1/pages/index/index' })}>123</Button>
      </View>
    )
  }
}
