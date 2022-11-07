'use strict';



module.exports = function (io) {
    io.on('connection', socket => {
        console.log(`${socket.id} connected`);
        socket.on('send', (data) => {
            socket.username = data.username;
            const { message } = data;
            socket.broadcast.emit('new-message', message);
        });
    });

};
