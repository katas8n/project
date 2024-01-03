const express = require('express');
const { getAllPlanets } = require('./planets.controller');

const planetsRouter = express.Router();

// Type of middleware 
planetsRouter.get('/', getAllPlanets);

module.exports = {
    planetsRouter
}