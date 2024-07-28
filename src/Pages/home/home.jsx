import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const HomePage = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (ev) =>{
    ev.preventDefault();
    navigate(`/room/${roomCode}`)

  }
  return (
    <div className="home-page">
      <form className="form" onSubmit={handleFormSubmit}>
        <div>
          <label>Enter Room Code</label>
          <input
            type="text"
            onChange={(e) => setRoomCode(e.target.value)}
            name="room-code"
            placeholder="Enter Room Code"
            required
          />
        </div>
        <button type="submit">Enter Room</button>


        
      </form>
    </div>
  );
};

export default HomePage;
