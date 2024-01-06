const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: "Kapler exploration X",
    rocket: "Explorer 131",
    launchDate: new Date("December 27, 2030"),
    target: "Kapler-442",
    customer: ["NASA"],
    upcoming: true,
    success: true,
}

let latestFlightNumber = launch.flightNumber;

launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
    launches.set(
        ++latestFlightNumber,
        Object.assign(launch, {
            flightNumber: latestFlightNumber,
            customer: ["NASA"],
            upcoming: true,
            success: true,
        })
    );
    
    return launch;
}

module.exports = {
    launches,
    addNewLaunch
}