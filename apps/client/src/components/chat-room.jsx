import React, { useState } from 'react';


function ChatRoom(props) {
    const [socket, setSocket] = useState(props.socket);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            message: e.target.message.value,
            username: props?.user
        };
        socket.emit('send', data);
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">message</label>
                <input id='message' type="textarea" />
                <button type='submit'>send</button>
            </form>
        </div>
    );
}

export default ChatRoom;