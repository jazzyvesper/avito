import { PayloadAction , createSlice } from '@reduxjs/toolkit'
import {getNews, getComments} from './api.js'

const newsSlice = createSlice({
    name: 'data',
    initialState: {
        data: []
    },
    reducers: {},
    extraReducers: (builder) => {
          builder.addCase(
            getNews.fulfilled, (state, action) => {
              console.log(action)
              state.data.push(action.payload)
            }
          );
        }
  })
  
  export const newReducer = newsSlice.reducer;