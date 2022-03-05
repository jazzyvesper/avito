import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import News from '../News/News';
//import {getId} from '../../store/newsSlice'

function App() {
 



  return (
    <div className="page">
      <Switch>
        <Route exact path="/"> 
          <Home />
        </Route>
        <Route path="/:id">
          <News />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
