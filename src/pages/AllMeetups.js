import MeetupList from '../components/MeetupList/MeetupList';
import { URL } from '../constants/constants';
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import DataContext from '../_store/data-context';

const AllMeetupsPage = () => {
  const favCtx = useContext(DataContext);

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
        // favCtx.favorites.push(meetup); //
      }
      setLoadedData(meetups);
      // setLoadedData(Object.values(data));
    });
  }, [favCtx.favorites]);

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