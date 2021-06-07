import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Views/Home';

function App() {


  console.log('%c Woah! Made by Zubair Akbar 🤓 ', 'background: #222; color: #bada55');

  return (

    <Router>
      <div>
      <div>Test message from App</div>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;