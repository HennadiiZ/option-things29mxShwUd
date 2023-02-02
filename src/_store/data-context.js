import React, { useState, useEffect, useCallback } from 'react';

const DataContext = React.createContext({
  favorites: [],
  totalFavorites: 0,
  add: () => {},
  remove: () => {},
});

export const DataContextProviders = (props) => {

  const [userFavorites, setUserFavorites] = useState([]);

  const addHandler = (favItem) => {
    setUserFavorites((prevFavItem) => {
      return prevFavItem.concat(favItem);
    });
  };

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
  };
      
  return (
    <DataContext.Provider value={context}>
      { props.children }
    </DataContext.Provider>
  );
}