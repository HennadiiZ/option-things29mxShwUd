import { useContext } from 'react';
import DataContext from '../_store/data-context';

import MeetupList from '../components/MeetupList/MeetupList';

const FavoritesPage = () => {
  const favCtx = useContext(DataContext);

  let content;

  console.log(favCtx.favorites);

  if (favCtx.totalFavorites === 0) {
    content = <p>No Favs added.</p>
  } else {
    content = <MeetupList meetups={favCtx.favorites}/>
  }

  return (
    <section>
      <h1>My Fav</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;