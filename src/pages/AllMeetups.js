import MeetupList from '../components/MeetupList/MeetupList';

const DUMMY_MEETUPS = [
  { 
    title: 'Mexico',
    image: 'https://www.planetware.com/wpimages/2019/09/mexico-in-pictures-most-beautiful-places-to-visit-tulum.jpg',
    address: 'any',
    description: 'some descr',
    id: Math.random()
  },
  { 
    title: 'Mexico',
    image: 'https://www.planetware.com/wpimages/2019/09/mexico-in-pictures-most-beautiful-places-to-visit-tulum.jpg',
    address: 'any',
    description: 'some descr',
    id: Math.random()
  },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <MeetupList meetups={DUMMY_MEETUPS}/>
    </section>
  );
};

export default AllMeetupsPage;