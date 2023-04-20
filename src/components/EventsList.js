// import { useLoaderData } from 'react-router-dom';
import { Link } from 'react-router-dom';

//import classes from './EventsList.module.css';

function EventsList({ events }) {
  // const events = useLoaderData();

  return (
    <div className='container'>
      <h1>All Events</h1>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {events.map((event) => (
          <div className='col-sm-4'>
            <li className='card h-w75' key={event.id}>
              <Link to={`/events/${event.id}`}>
                <img
                  src={event.image}
                  alt={event.title}
                  className='card-img-top'
                  style={{
                    maxHeight: '18rem',
                    minHeight: '15rem',
                    objectFit: 'cover',
                  }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>{event.title}</h5>
                  <div className='card-text'>
                    <time>Date :{event.date}</time>
                  </div>
                </div>
              </Link>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsList;
