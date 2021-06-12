import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Home from './Views/Home';

function App() {


  console.log('%c Woah! Made by Zubair Akbar 🤓 ', 'background: #222; color: #bada55');

  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </AppWrapper>
  )
}

export default App;

const AppWrapper = styled.div`
  background: url('./assets/zakbar1.jpg') no-repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
`;