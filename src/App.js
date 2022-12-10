
// import { useEffect } from 'react';
// import { Routes, Route, Link } from "react-router-dom"
import './App.css';
// import Buy from './Buy';
// import Test from './Test';

function App() {
  document.location = `https://mint.opn.network/claim?c=4EVE`
  // (() => {
  //   document.location.href = `https://mint.opn.network/claim?c=4EVE`
  //   return false
  // })()


  return (
    <div className="App">
      <div>
        <h1>This is the home page</h1>
        {/* <Link to="test">Test</Link>
        <Link to="buy">Buy</Link> */}
      </div>
      {/* <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/test" element={<Test />} />
      </Routes> */}
    </div>
  );
}

export default App;
