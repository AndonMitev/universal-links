
// import { useEffect } from 'react';
// import { Routes, Route, Link } from "react-router-dom"
import { useEffect } from 'react';
import './App.css';
// import Buy from './Buy';
// import Test from './Test';

const colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"];
let colorIdx = 0;
function App() {
  const body = document.getElementsByTagName('body')[0];
  // document.location = 'https://mint.opn.network/claim'
  setInterval(() => {
    body.style.backgroundColor = colors[colorIdx++]
  }, 5000)

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
