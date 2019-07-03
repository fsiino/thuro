import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const loggedOut = () => (
    <nav>
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up</Link>
    </nav>
  );

  const loggedIn = () => (
    <nav>
      <h2>Hi, {currentUser.fname}.</h2>
      <h3>In case you didn't know, your last name is {lname}.</h3>
      <button onClick={logout}>Log Out</button>
    </nav>
  );

  if (currentUser) {
    return loggedIn();
  } else {
    return loggedOut();
  };

};

export default Greeting;