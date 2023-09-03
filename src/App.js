import "./App.css";

import { Routes, Route } from 'react-router-dom'

import Home from "./page/Home";


function App() {
  return (

    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>

    </div>
  );
}

export default App;
 