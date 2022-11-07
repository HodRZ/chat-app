'use strict';



module.exports = function (io) {
    io.on('connection', socket => {
        console.log(`${socket.id} connected`);
        socket.on('send', (data) => {
            console.log(data);
            socket.username = data.username;
            const { message } = data;
            io.emit('new-message', message);
        });
    });

};
