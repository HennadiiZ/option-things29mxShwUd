import { useContext } from 'react';
import DataContext from '../_store/data-context';

import MeetupList from '../components/MeetupList/MeetupList';

const FavoritesPage = () => {
  const favCtx = useContext(DataContext);

  return (
    <section>
      <h1>My Fav</h1>
      <MeetupList meetups={favCtx.favorites}/>
    </section>
  );
};

export default FavoritesPage;