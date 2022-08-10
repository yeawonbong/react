import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState: { name : 'kim', age : 20 },
  reducers : {
    setUser(state, toChange) {
      state.name = state.name + toChange.payload
      console.log("hi")
    },
    increase(state, action) {
      state.age += action.payload
    }
  }
})

export let { setUser, increase } = user.actions

export default user