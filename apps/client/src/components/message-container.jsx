import React, { useState } from 'react';

function MessageContainer(props) {
    const [socket, setSocket] = useState(props.socket);
    const [msgs, setMsgs] = useState([]);

    socket.on('new-message', message => {
        console.log(socket.username);
        setMsgs([...msgs, message]);
    });
    return (
        <div>
            <ul>
                {msgs.map((msg, idx) => {
                    return <li key={idx}>{`${socket.id} : ${msg}`}</li>;
                })}
            </ul>
        </div>
    );
}

export default MessageContainer;