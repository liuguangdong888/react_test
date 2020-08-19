import React from 'react'
import Login from './login/index'
import {BrowserRouter,Route,Redirect} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Redirect from="/" to="/login" exact></Redirect>
      <Route path='/login' component={Login} exact></Route>
    </div>
  </BrowserRouter>
  );
}

export default App;
