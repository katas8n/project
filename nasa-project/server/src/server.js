const http = require('http');

const { app } = require('./app');

const { loadPlanetsData } = require('./models/planets.model');   

const PORT = process.env.process || 8000;

const server = http.createServer(app);

(async function () {
    await loadPlanetsData();

    await server.listen(PORT,() => {
        console.log(`Server is listening in the ${PORT} port number.`);
    })
})();



