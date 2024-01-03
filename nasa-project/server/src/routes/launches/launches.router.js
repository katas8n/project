const express = require('express');

const { getAllLaunches, httpAddNewLauch } = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', getAllLaunches);
launchesRouter.post('/', httpAddNewLauch);

module.exports = {
    launchesRouter
}