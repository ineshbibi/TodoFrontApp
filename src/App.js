import React from 'react';
import logo from './logo.svg';

import {Route,Switch} from 'react-router-dom'
import List from './ListTodo/ListTodo'
function App() {
  return (
    <div className="App">
    
     
     <Switch>
      <Route exact path="/" component= {List}/>
     </Switch>
   
    </div>
  );
}

export default App;
