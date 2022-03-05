
class NewsApi {
    constructor ({address, headers}) {
      this._address = address;
      this._headers = headers;
    }
    
    _getResponseData(res) {
      if(res.ok) {
        return res.json()
      }else {
        return Promise.reject(res.status)
      } 
    }


  getId () {
    return fetch(`${this._address}`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._getResponseData)
  }

  getNews (id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._getResponseData)
  }

  getComments (id) {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`, {
      method: 'GET',
      headers: this._headers,
    })
    .then(this._getResponseData)
  }

}  

const api = new NewsApi({
    address: 'https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
  }
  });
  
  export default api