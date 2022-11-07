import React, { useEffect } from 'react';
import { HOST } from '../config';
import { io } from 'socket.io-client';


function ChatRoom(props) {


    useEffect(() => {
        const socket = io.connect(HOST);
        socket.on('connection', () => {
            console.log(socket.id);
            console.log('connected To server');
        });
        console.log(socket.id);
        socket.on('disconnect', () => {
            console.log(`Socket ${socket.id} disconnected!`);
        });
    });
    return (
        <div>

        </div>
    );
}

export default ChatRoom;