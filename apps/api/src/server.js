'use strict';

const { express, cors, PORT, socket } = require("./config");


const app = express();
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World');
});




const server = app.listen(PORT, () => {
    console.log(`Diamon City Radio ${PORT}`);
});

const io = socket(server, {
    transports: ['websocket', 'polling'],
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT']
    }
});

require('./socket')(io);