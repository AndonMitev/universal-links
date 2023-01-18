
// import { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom"
// import { useEffect } from 'react';
import './App.css';
import { Redeem } from './Redeem';
// import Buy from './Buy';
import Test from './Test';

// const colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"];
// let colorIdx = 0;
function App() {
  // document.location.href = 'https://mint.opn.network/claim'
  // const body = document.getElementsByTagName('body')[0];

  // setInterval(() => {
  //   body.style.backgroundColor = colors[colorIdx++]
  // }, 5000)

  return (
    <div className="App">
      <div>
        <h1>This is the home page</h1>
        <Link to="test">Test</Link>
        <Link to="redeem">Redeem</Link>
      </div>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/redeem" element={<Redeem />} />
      </Routes>
    </div>
  );
}

export default App;
