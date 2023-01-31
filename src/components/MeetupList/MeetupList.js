import classes from './MeetupList.module.css';
import MeetupItem from '../MeetupItem/MeetupItem';

const MeetupList = (props) => {
  return (
    <ul className={classes.list}>
      { props.meetups.map(item => {
        return (
          <MeetupItem 
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            address={item.address}
            description={item.description}
          />
        );
      })}
    </ul>
  );
};

export default MeetupList;