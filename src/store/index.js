import { configureStore } from '@reduxjs/toolkit'
import {idSlice, newsSlice} from './reguestSlice'


export default configureStore({
  reducer: {
    id: idSlice.reducer,
    news: newsSlice.reducer
  }
})
