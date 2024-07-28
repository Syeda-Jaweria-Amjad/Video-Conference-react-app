import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import HomePage from './Pages/home/home';
import Room from './Pages/Room/Room';




function App() {

  // const Room = () => {
  //   const { roomId } = useParams();
  //   return <h1>{roomId}</h1>;
  // };

  return (
    <div className='App'>
        <Routes>
          <Route path="/" element={<HomePage/>} />   
          <Route path="/room/:roomId" element={<Room/>} />   
        </Routes>
      
    </div>
    
  );
}

export default App;