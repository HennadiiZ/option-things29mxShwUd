import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

import { useContext } from 'react';
import DataContext from '../_store/data-context';

const MainNavigationPage = () => {

  const favCtx = useContext(DataContext);

  return (
    <header className={classes.header}>
      <Link className={classes.logo} to='/'>React App</Link>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>All Meetups</NavLink>
          </li>
          <li>
            <NavLink to='/new-meetup'>New Meetup</NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>Favorites {favCtx.totalFavorites}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationPage;