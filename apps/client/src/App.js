import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import './App.css';
import ChatRoom from './components/chat-room';
import MessageContainer from './components/message-container';
import User from './components/User';
import { HOST } from './config';

function App() {
  const [user, setUser] = useState();
  const [socket, setSocket] = useState();
  const newUser = (e) => {
    e.preventDefault();
    setUser(e.target.user.value);
    e.target.user.value = '';
  };

  useEffect(() => {
    const socket = io.connect(HOST);
    socket.on('connection', () => {
      console.log('connected To server');
    });
    setSocket(socket);

    socket.on('disconnect', () => {
      console.log(`Socket disconnected!`);
    });
  }, []);
  return (
    <div className="App">
      <h1>Hello World!</h1>

      {(user) ?
        <>
          <MessageContainer socket={socket} />
          <ChatRoom user={user} socket={socket} />
        </>
        : <User newUser={newUser} />}
    </div>
  );
}

export default App;
