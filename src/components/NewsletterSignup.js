import { useEffect } from 'react';
import { useFetcher } from 'react-router-dom';

import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <div
        className='input-group mb-6'
        style={{ maxWidth: '35rem', margin: 'auto' }}
      >
        <input
          className='form-control border border-success'
          type='email'
          placeholder='Subscribe for Event...'
          aria-label='Subscribe for event'
        />
        <button className='btn btn btn-warning'>Subsribe</button>
      </div>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
