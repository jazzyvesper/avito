import { PayloadAction , createSlice } from '@reduxjs/toolkit'
import {getIds, getNews} from './api.js'

export const idSlice = createSlice({
  name: 'id',
  initialState: {
    id: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getIds.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getIds.fulfilled]: (state, action)=> {
      state.status = 'resolved'
      state.id = action.payload;
    },
    [getIds.rejected]: (state, action)=> {
      state.status = 'rejected'
      state.id = action.payload;
    },
  }
})


export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getNews.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [getNews.fulfilled]: (state, action)=> {
      state.status = 'resolved'
      state.news.push(action.payload)
    },
    [getNews.rejected]: (state, action)=> {
      state.status = 'rejected'
      state.news = action.payload;
    },
  }
})


