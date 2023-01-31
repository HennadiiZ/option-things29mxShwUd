import classes from './MeetupList.module.css';
import MeetupItem from '../MeetupItem/MeetupItem';

const DUMMY_MEETUPS = [
  { 
    title: 'Mexico',
    image: 'https://www.planetware.com/wpimages/2019/09/mexico-in-pictures-most-beautiful-places-to-visit-tulum.jpg',
    description: 'some descr',
    id: Math.random()
  },
  { 
    title: 'Mexico',
    image: 'https://www.planetware.com/wpimages/2019/09/mexico-in-pictures-most-beautiful-places-to-visit-tulum.jpg',
    description: 'some descr',
    id: Math.random()
  },
];

const MeetupList = (props) => {
  return (
    <div className={classes.list}>
      { DUMMY_MEETUPS.map(item => {
        return (
          <MeetupItem 
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default MeetupList;