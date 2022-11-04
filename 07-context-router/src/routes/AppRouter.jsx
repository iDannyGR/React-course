import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from '../components/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Error404 from '../pages/Error404';

const AppRouter = () => {
  return (
      <Router>
          <Header />
          <Switch>
              <Route exact path='/' component={Home} />            
              <Route exact path='/about' component={About} />            
              <Route  path='/*' component={Error404} />            
            </Switch>
    </Router>
  )
}

export default AppRouter