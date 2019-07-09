import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Single from './pages/Single'

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/single" component={Single} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes