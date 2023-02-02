import React, { useState, useEffect, useCallback } from 'react';

const DataContext = React.createContext({
  favorites: [],
  totalFavorites: 0,
  add: (favItem) => {},
  remove: (id) => {},
  selected: (id) => {}
});

export const DataContextProviders = (props) => {

  const [userFavorites, setUserFavorites] = useState([]);

  const addHandler = (favItem) => {
    setUserFavorites((prevFavItem) => {
      return prevFavItem.concat(favItem);
    });
  };

//   localStorage.setItem('favs', JSON.stringify(userFavorites));

  const removeHandler = (itemId) => {
    setUserFavorites((prevFavItem) => {
      return prevFavItem.filter(item => item.id !== itemId);
    });   
  };

  const itemIsSelectedHandler = (itemId) => {
    return userFavorites.some(item => item.id === itemId);
  };

  const context= {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    add: addHandler,
    remove: removeHandler,
    selected: itemIsSelectedHandler
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}

export default DataContext;