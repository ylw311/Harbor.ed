import React, { useState } from 'react';
import Card from './Cards.js';
import Main from './main.js';

function App() {
  const [activeOptionId, setActiveOptionId] = useState(null);

  return (
    <div>
      <Card
        activeOptionId={activeOptionId}
        setActiveOptionId={setActiveOptionId}
      />
      <Main
        activeOptionId={activeOptionId}
      />
    </div>
  );
}

export default App;
