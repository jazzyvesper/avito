import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import News from './News';
import {useSelector, useDispatch} from 'react-redux'
import {getIds} from '../store/api'
import Skeleton from './Skeleton'

function App() {
  const dispatch = useDispatch()
  const {id, status, error} = useSelector(state => state.id)
  const limitId = sortArr(id.slice(0, 100))
  
  React.useEffect(()=> {
    dispatch(getIds())
  },[])

  
  function sortArr(arr) {
    const sortArr = arr.sort(function(a, b) {
      if (a < b) return 1; 
      if (b < a) return -1;
      return 0;
      })
      return sortArr
  }

  return (
    <div className="page">
      <Switch>
        
        {error && <h2>Произошла ошибка: {error}</h2>}
        <Route exact path="/">
          <Home skeleton={status} id={limitId}/>
        </Route>
        <Route path="/:id">
          <News />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
