import NewMeetupForm from '../components/NewMeetupForm/NewMeetupForm';
import { URL } from '../constants/constants';
import { useHistory } from 'react-router-dom';

const NewMeetupPage = () => {
  const history = useHistory();

  const dataHandler = (formData) => { 
    fetch(
      `${URL}`, 
      {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}
      }
    ).then(response => {
      console.log(response);
      history.replace('/');
    });
  };

  return <section><NewMeetupForm onAddMeetup={dataHandler}/></section>
};

export default NewMeetupPage;