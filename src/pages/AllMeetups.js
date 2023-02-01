import MeetupList from '../components/MeetupList/MeetupList';
import { URL } from '../constants/constants';
import { useEffect, useState } from 'react';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    fetch(`${URL}`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      setIsLoading(false)

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