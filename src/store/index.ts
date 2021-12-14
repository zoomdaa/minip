import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './features/user/userInfoSlice'

export default configureStore({
  reducer: {
    userInfo: userInfoReducer
  }
})
