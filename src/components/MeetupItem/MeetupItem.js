import classes from './MeetupItem.module.css';
import Card from '../../UI/Card';

import { useContext } from 'react';
import DataContext from '../../_store/data-context';

const MeetupItem = (props) => {

  const favCtx = useContext(DataContext);

  const itemIsFavorite = favCtx.selected(props.id);

  const toggleFavStatusHandler = () => {
    if (itemIsFavorite) {
      favCtx.remove(props.id);
    } else {
      favCtx.add({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description
      });
    }
  }
  
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavStatusHandler}>{!itemIsFavorite ? 'To Favorites' : 'Remove Fav'}</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;