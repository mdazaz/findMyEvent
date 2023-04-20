import { NavLink } from 'react-router-dom';

import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  return (
    <header className=''>
      <nav className='navbar navbar-expand-lg navbar-dark bg-danger'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand' href='#'>
            EventFinder
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  className={`nav-link $({ isActive }) =>
                isActive ? classes.active : undefined`}
                  end
                  aria-current='page'
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className={`nav-link $({ isActive }) =>
                isActive ? classes.active : undefined`}
                  end
                  to='/events'
                >
                  Events
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className={`nav-link $({ isActive }) =>
                isActive ? classes.active : undefined`}
                  end
                  to='/events/new'
                >
                  Add Event
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/newsletter'
                  className={`nav-link $({ isActive }) =>
                  isActive ? classes.active : undefined`}
                  end
                >
                  Subscribe Alert!
                </NavLink>
              </li>
            </ul>
            <NewsletterSignup />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
