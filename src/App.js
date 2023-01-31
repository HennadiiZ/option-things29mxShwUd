import './App.css';
import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import MainNavigationPage from './Layout/MainNavigation';

function App() {

  return (
    <div>
      <MainNavigationPage />
      <main>
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
      </main>  
    </div>
  );
}

export default App;
