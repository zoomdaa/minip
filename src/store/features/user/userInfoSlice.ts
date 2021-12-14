import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    name: 'vasily'
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload
    }
  }
})

export const selectName = state => state.userInfo.name

export const { changeName } = userInfoSlice.actions
export default userInfoSlice.reducer
