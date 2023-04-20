import PageContent from '../components/PageContent';

function HomePage() {
  return (
    <div style={{ marginLeft: '7rem' }}>
      <div className='lead mt-5'>Welcome to Find My Events!</div>
      <p>Event Finder is a React Application which allows you to:</p>
      <ul className='text-left list-group-numbered'>
        <li className='list-group-item'>Add New Events</li>
        <li className='list-group-item'>Edit Event</li>
        <li className='list-group-item'>View Events</li>
        <li className='list-group-item'>Delete Event</li>
      </ul>
      <h5>Developer: Mohammad Azaz</h5>
      <h6>email: mdazaz123@gmail.com</h6>
      <br />
      <br />
    </div>
  );
}

export default HomePage;
