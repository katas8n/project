const express = require('express');
const { httpDeleteLaunch } = require('./upcoming.controller');

const upcomingRouter = express.Router();

upcomingRouter.delete("/:id", httpDeleteLaunch);

module.exports = {
    upcomingRouter
}