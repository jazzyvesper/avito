import { createAsyncThunk } from "@reduxjs/toolkit";

  export const getId = createAsyncThunk(
    'request/getRequest',
    async () => {
      const response = await fetch(`https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
      }
      })
      const data = await response.json();
      return data;
    }
  )


  export const getNews = createAsyncThunk(
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