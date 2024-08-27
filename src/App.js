import React from 'react';
import WithJSX from './WithJSX';
import WithoutJSX from './WithoutJSX';

function App() {
  return (
    <div className="App">
      <h1>JSX 사용 vs 미사용 비교</h1>
      <WithJSX />
      <WithoutJSX />
    </div>
  );
}

export default App;