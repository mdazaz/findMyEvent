import { Link, useSubmit } from 'react-router-dom';

//import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }

  return (
    <div class='container'>
      <div class='card w-50' style={{ margin: 'auto', maxHeight: '100' }}>
        <div class='card-header'>
          <h5>
            {' '}
            {event.title} Held on:{event.date}
          </h5>
        </div>
        <img
          src={event.image}
          className='card-img-top img-fluid rounded-start'
          style={{ maxHeight: '35rem' }}
          alt={event.title}
        />
        <div class='card-body'>
          <h5 class='card-title'>{event.title}</h5>
          <time>{event.date}</time>
          <p className='card-text'>{event.description}</p>
        </div>
        <div class='card-footer'>
          <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <Link
              to='edit'
              className='btn btn-success'
              style={{ width: '10rem' }}
            >
              Edit
            </Link>
            <button
              className='btn btn-danger btn-lg'
              onClick={startDeleteHandler}
              style={{ width: '10rem' }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventItem;
