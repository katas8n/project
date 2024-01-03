const express = require('express');
const { 
    getMessage,
    postMessage,
    getMessages
} = require('../controllers/messages.controller');


const messagesRouter = express.Router();

messagesRouter.get('/', getMessages);

messagesRouter.post('/', postMessage);

messagesRouter.get('/:msgID', getMessage);

module.exports = {
    messagesRouter
}