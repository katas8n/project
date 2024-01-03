const { parse } = require('csv-parse');
const { on } = require('events');
const fs = require('fs');
const { resolve } = require('path');

const planets = [];

function isHarbitalPlanet(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 
        && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

function loadPlanetsData() {
    return new Promise((res,rej) => {
        fs.createReadStream('/Users/katas8n/Documents/project/nasa-project/server/src/data/kepler_data.csv')
            .pipe(parse({
                comment : "#",
                columns : true
            }))
            .on('data', (chunk) => {
                if(isHarbitalPlanet(chunk)) planets.push(chunk);
            })
            .on('end' ,() => {
                res();
            })
            .on('error', (error) => {
                console.log('[error.message]', error.message);
                rej()
            })

    })
}



module.exports = { planets ,loadPlanetsData }