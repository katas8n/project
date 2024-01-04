const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const { planetsRouter } = require('./routes/planets/planets.router');
const { launchesRouter } = require('./routes/launches/launches.router');
const { upcomingRouter } = require('./routes/upcoming/upcoming.router');

const app = express();

// Type of middleware 
app.use(express.json());
app.use(cors({
    origin : 'http://localhost:3000'
}));
app.use(morgan('combined'));

app.use('/planets', planetsRouter);
app.use('/launches', launchesRouter);
app.use('/upcoming', upcomingRouter);

app.use('', (req,res) => {
    console.log("Server is running!");
});

module.exports = {
    app
};