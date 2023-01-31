import classes from './MeetupItem.module.css';


const MeetupItem = (props) => {
  return (
    <div className={classes.item}>
      <p>{props.title}</p>
      <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
      </div>
      <div>{props.description}</div>
    </div>
  );
};

export default MeetupItem;