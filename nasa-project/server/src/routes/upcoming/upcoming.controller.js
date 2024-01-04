const { launches } = require('../../models/launches.model');

function httpDeleteLaunch(req, res) {
    const launchId = req.params.id;
    launches.delete(+launchId)
;
    console.log('[launches]', launches);

    return res.status(200).json(launches);
}

module.exports = {
    httpDeleteLaunch
}