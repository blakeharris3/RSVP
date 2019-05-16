import React from 'react';
import { Header } from 'semantic-ui-react';

import { Link } from 'react-router-dom';


const HeaderApp = () => {
  return (
    <Header>
      <ul>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </Header>
    )
}

export default HeaderApp;
