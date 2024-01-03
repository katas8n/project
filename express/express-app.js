const path = require('path');
const express = require('express');
const { messagesRouter } = require('./router/messages.router');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const image = path.join(__dirname, "public", "image.png");
    console.log('[POINT_OF_DESTINATION]');
    res.sendFile(image);
});

app.use('/messages',messagesRouter);

app.listen(3000, () => {
    console.log("WORKS!");
});