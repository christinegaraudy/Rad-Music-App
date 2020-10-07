import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Splash = ({ userLoggedIn }) => (
  <div className="splash-container">
    <div className="splash-page-navbar">
      <Navbar bg="dark" variant="dark" className="justify-content-end">
        <Nav className="mr-auto" className="justify-content-end">
<<<<<<< HEAD
          <Nav.Link onClick={userLoggedIn}>Sign Up</Nav.Link>
=======
          <Nav.Link href="">Sign Up</Nav.Link>
>>>>>>> 8b93c4b... (update) landing.jsx and app.jsx
          <Nav.Link href="">Login</Nav.Link>
          {/* <Nav.Link>Add</Nav.Link> */}
        </Nav>
      </Navbar>
    </div>
    <div
      className="splash-page-content"
      style={{
        display: 'flex', justifyContent: 'center', marginTop: '300px', fontSize: '128pt',
      }}
    >
      RadMa
    </div>
    <div
      className="splash-page-sub-heading"
      style={{
        display: 'flex', justifyContent: 'center', fontSize: '24pt',
      }}
    >
      Add Shows. Find Shows. Save Shows.
    </div>
  </div>
);

export default Splash;
