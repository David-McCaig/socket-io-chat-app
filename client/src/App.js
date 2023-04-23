// client/src/App.js

import './App.css';
import { useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from 'socket.io-client'; 
import Home from './Pages/Home/Home';
import Chat from './Pages/Chat/Chat';
import { v4 as uuidv4 } from 'uuid';

const socket = io.connect('http://localhost:4000'); // our server will run on port 4000, so we connect to it from here


function App() {
 
  const [username, setUsername] = useState(''); 
  const [room, setRoom] = useState('b9089d26-ca11-4928-a730-3092e6b5ea66'); 
  
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={
              <Home
                username={username} 
                setUsername={setUsername} 
                room={room} 
                setRoom={setRoom} 
                socket={socket} 
              />
            }
          />
          <Route
            path='/chat'
            element={<Chat username={username} room={room} socket={socket} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
