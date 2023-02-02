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

//   useEffect(() => {
//     localStorage.setItem('items', JSON.stringify(userFavorites));
//   }, [userFavorites]);

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

  let localStorageItems = JSON.parse(localStorage.getItem('items'));
  console.log(localStorageItems);

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