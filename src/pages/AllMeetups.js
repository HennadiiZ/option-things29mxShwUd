import MeetupList from '../components/MeetupList/MeetupList';
import { URL } from '../constants/constants';
import { useEffect, useState } from 'react';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${URL}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setIsLoading(false);

      const meetups = [];

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup);
        // console.log('data[key]', data[key]);
      }
      setLoadedData(meetups);
      // console.log('mtps', meetups);

      // if (data) {
      //   setLoadedData(Object.values(data));
      // }
    });
  }, []);

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