import { configureStore } from '@reduxjs/toolkit'
import {requestsReducer} from './idSlice'
import {newReducer} from './newsSlice'


export default configureStore({
  reducer: {
    id: requestsReducer,
    news: newReducer
  }
})
