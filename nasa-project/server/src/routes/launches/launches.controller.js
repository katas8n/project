const { launches, addNewLaunch } = require('../../models/launches.model');

function getAllLaunches(req, res) {
    return res.status(200).json(Array.from(launches.values()));
}

function httpAddNewLauch(req, res) {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);

    if(isNaN(launch.launchDate) || !launch) return res.status(400).json({error : "There is invalid date type"})

    addNewLaunch(launch);
    return res.status(201).json(launch);
}

module.exports = {
    getAllLaunches,
    httpAddNewLauch
}