import React from 'react';
import Navigation from './Navigation';
import UnderConstructionIcon from './icons/UnderConstructionIcon';

const UnderConstruction = () => (
  <div>
    <Navigation navLabel="Under Construction 🚧" />
    <main className="main">
      <h1>Page Under Construction</h1>
      <UnderConstructionIcon />
    </main>
  </div>
);

export default UnderConstruction;
