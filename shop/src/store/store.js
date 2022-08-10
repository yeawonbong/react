import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice'

let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

let cart = createSlice({
  name: 'cart',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 1, name: 'Grey Yordan', count: 1 }
  ],
  reducers: {
    addCount(state, id) {
      state[id.payload].count++
    },
    addItem(state, item) {
      let i = 0
      while (state[i]) {
        if (state[i].name === item.payload) {
          state[i].count++
          return
        }
        i++
      }
      state.push({id: i, name: item.payload, count: 1})
    }
  }
})

export let { addCount, addItem } = cart.actions

export default configureStore({
  reducer: {
    user: user.reducer, //등록
    stock: stock.reducer,
    cart: cart.reducer
  }
}) 