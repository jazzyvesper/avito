import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import News from '../News/News';
import {useSelector, useDispatch} from 'react-redux'
import {getId} from '../../store/api'

function App() {
  const dispatch = useDispatch()
  const id = useSelector(state => state.id.id)
  const limitId = sortArr(id.slice(0, 10))
  React.useEffect(()=> {
    dispatch(getId())
  },[])
  console.log(id)
  function sortArr(arr) {
    const NewMassiv = arr.sort(function(a, b) {
      if (a < b) return 1; 
      if (b < a) return -1;
      return 0;
      })
      return NewMassiv
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/"> 
          <Home id={limitId}/>
        </Route>
        <Route path="/:id">
          <News />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
