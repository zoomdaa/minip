import { View } from '@tarojs/components'
import { useSelector } from 'react-redux'
import { selectName } from '@/store/features/user/userInfoSlice'

export default function () {
  const name = useSelector(selectName)
  return (
    <View>{name}</View>
  )
}
