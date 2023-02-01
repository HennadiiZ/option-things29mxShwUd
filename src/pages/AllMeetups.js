import MeetupList from '../components/MeetupList/MeetupList';
import { URL } from '../constants/constants';
import { useEffect, useState } from 'react';

// const DUMMY_MEETUPS = [
//   { 
//     title: 'Mexico',
//     image: 'https://www.planetware.com/wpimages/2019/09/mexico-in-pictures-most-beautiful-places-to-visit-tulum.jpg',
//     address: 'any',
//     description: 'some descr',
//     id: Math.random()
//   },
//   { 
//     title: 'Mexico',
//     image: 'https://www.planetware.com/wpimages/2019/09/mexico-in-pictures-most-beautiful-places-to-visit-tulum.jpg',
//     address: 'any',
//     description: 'some descr',
//     id: Math.random()
//   },
// ];

const AllMeetupsPage = () => {
  // let MEETUPS;
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch(`${URL}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setIsLoading(false)
      // MEETUPS = Object.values(data);
      // console.log('Object.values(data)', Object.values(data) );
      if (data) {
        setLoadedData(Object.values(data));
      }
    });
  }, [setLoadedData]);

  if (isLoading) {
    return (
      <section style={{'textAlign': 'center'}}>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <MeetupList meetups={loadedData}/>
    </section>
  );
};

export default AllMeetupsPage;