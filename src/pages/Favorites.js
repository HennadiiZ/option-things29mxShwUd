import { useContext } from 'react';
import DataContext from '../_store/data-context';

const FavoritesPage = () => {
  const favCtx = useContext(DataContext);

  return <p>Favorites</p>
};

export default FavoritesPage;