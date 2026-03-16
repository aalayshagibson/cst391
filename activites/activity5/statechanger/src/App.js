import React from 'react';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h1>State Changer Demo</h1>
      <Counter title="First Counter" />
      <Counter title="Second Counter" />
      <Counter title="Third Counter" />
    </div>
  );
}

export default App;