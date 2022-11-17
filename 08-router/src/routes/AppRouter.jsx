import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchScreen from '../pages/SearchScreen';

const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Switch>
            <Route exact path='/search' component={ SearchScreen } />
            {/* <Redirect to='/search' /> */}
        </Switch>
    </>
  )
}

export default AppRouter