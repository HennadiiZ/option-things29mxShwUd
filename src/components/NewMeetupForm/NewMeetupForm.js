import classes from './NewMeetupForm.module.css';

const NewMeetupForm = () => {
  return (
    <form className={classes.form}>
      <h3>Add a new meetup:</h3>
      <div className={classes.control}>
        <label htmlFor="title">Title</label> 
        <input id="title" type="text"/>
      </div>
      <div className={classes.control}>
        <label htmlFor="image">Image link</label> 
        <input id="image" type="text"/>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label> 
        <input id="address" type="text"/>
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label> 
        <textarea id="description" type="text"></textarea>
      </div>
    </form>
  );
};

export default NewMeetupForm;