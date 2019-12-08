import React from 'react';
import Navigation from './Navigation';
import FourOFourIcon from './icons/FourOFourIcon';

const NotFound = () => (
  <div>
    <Navigation navLabel="Not Found 🙃" />
    <main className="main">
      <h1>Page Not found</h1>
      <FourOFourIcon />
    </main>
  </div>
);

export default NotFound;
