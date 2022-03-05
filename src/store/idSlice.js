import { PayloadAction , createSlice } from '@reduxjs/toolkit'
import {getId, getNews, getComments} from './api.js'

const idSlice = createSlice({
  name: 'id',
  initialState: {
    id: []
  },
  reducers: {},
  extraReducers: (builder) => {
        builder.addCase(
          getId.fulfilled, (state, action) => {
            state.id = action.payload;
          }
        );
      }
})


export const requestsReducer = idSlice.reducer;
