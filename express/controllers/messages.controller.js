const { messages } = require('../models/messages.model');

function postMessage(req,resp) {
    if(!req.body.text) {  return res.status(404).json({error : "Error 404!"}); }

    const newMessage = {
        id: messages.length,
        text: req.body.text
    };
    messages.push(newMessage);

    res.json(newMessage);
};

function getMessages(req, res) {
    return res.json(messages);
};

function getMessage(req, res) {
    const par = +req.params.msgID;
    const msg = messages.find(msg => msg.id === par);

    if(!msg) return res.status(404).json({msg : "There is an error!"});

    res.status(200).json(msg);
}

module.exports = {
    postMessage,
    getMessages,
    getMessage
}