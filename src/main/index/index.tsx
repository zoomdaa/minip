import { useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { navigateTo } from '@tarojs/taro'
import { useSelector, useDispatch } from 'react-redux'
import { selectName, changeName } from '@/store/features/user/userInfoSlice'
import styles from './index.module.scss'

export default function () {
  const [count, setCount] = useState(0)
  const viewClass = `${styles.main_view} ${styles.active}`
  const name = useSelector(selectName)
  const dispatch = useDispatch()

  const handleBtnClick = () => {
    if (count % 2 === 0) {
      dispatch(changeName('zoomdaa'))
    } else {
      dispatch(changeName('vasily'))
    }
    setCount(count+1)
  }
  return (
    <View className={viewClass}>
      <Text>Hello world!</Text>
      <Text>{name}</Text>
      <Button onClick={() => navigateTo({ url: '/sub/sub1/pages/index/index' })}>跳转</Button>
      <Button onClick={handleBtnClick}>变成zoomdaa</Button>
    </View>
  )
}

