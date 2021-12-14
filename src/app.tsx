import { useEffect } from 'react'
import { useDidShow, useDidHide } from '@tarojs/taro'
import { Provider } from 'react-redux'
import store from '@/store/index'

// 全局样式
import './app.scss'

export default function App (props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return (
    <Provider store={store}>
      { props.children }
    </Provider>
  )
}
