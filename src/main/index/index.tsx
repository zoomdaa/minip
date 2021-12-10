import { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'
import styles from './index.module.scss'

export default class Index extends Component {
  viewClass = `${styles.main_view} ${styles.active}`
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className={this.viewClass}>
        <Text>Hello world!</Text>
        <Button onClick={() => navigateTo({ url: '/sub/sub1/pages/index/index' })}>123</Button>
      </View>
    )
  }
}
