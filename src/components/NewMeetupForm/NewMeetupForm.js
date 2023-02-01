import classes from './NewMeetupForm.module.css';
import Card from '../../UI/Card';
import { useRef } from 'react';

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descrInputRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();
    const titleValue = titleInputRef.current.value;
    const imageValue = imageInputRef.current.value;
    const addressValue = addressInputRef.current.value;
    const descrValue = descrInputRef.current.value;
  
    const formData = {
      titleValue: titleValue,
      imageValue:  imageValue, 
      addressValue: addressValue,
      descrValue: descrValue, 
    };

    props.onAddMeetup(formData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={formHandler}>
        <h3>Add a new meetup:</h3>
        <div className={classes.control}>
          <label htmlFor="title">Title</label> 
          <input id="title" type="text" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image link</label> 
          <input id="image" type="text" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label> 
          <input id="address" type="text" ref={addressInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label> 
          <textarea id="description" type="text" ref={descrInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;