import { createAsyncThunk } from "@reduxjs/toolkit";

  export const getIds = createAsyncThunk(
    'id/getid',
    async (_, {rejectWhithValue}) => {
      try { 
            const response = await fetch(`https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty`, {
              method: 'GET',
              headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': 'http://localhost:3000',
              }
            })
            if(!response.ok) {
              throw new Error('Server Error!')
            }
            const data = await response.json();
            return data;
          } catch (error) {
              return rejectWhithValue(error.message)
          }
    }
  )


  export const getNews = createAsyncThunk(
    'id/getnews',
    async (id, {rejectWhithValue}) => {
      try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
          method: 'GET',
          headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': 'http://localhost:3000',
          }
        })
        const data = await response.json();
        return data;
      } catch (error) {
          return rejectWhithValue(error.message)
      }
  })

  export const getComments = createAsyncThunk(
    'request/getRequest',
    async (id) => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
      }
      })
      const data = await response.json();
      return data;
    })