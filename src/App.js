import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigationPage from './layout/MainNavigation';
import Layout from './layout/Layout';

function App() {

  return (
    <div>
      <MainNavigationPage />
      <Layout>
        <Switch>
          <Route path='/' exact={true}>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>  
    </div>
  );
}

export default App;
