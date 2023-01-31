import { Link, NavLink } from 'react-router-dom';

const MainNavigationPage = () => {
  return (
    <header>
      <Link to='/'>React App</Link>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>All Meetups</NavLink>
          </li>
          <li>
            <NavLink to='/new-meetup'>New Meetup</NavLink>
          </li>
          <li>
            <NavLink to='/favorites'>Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationPage;