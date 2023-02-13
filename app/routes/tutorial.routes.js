module.exports = app => {
const tutorials = require('../controllers/tutorial.controller.js');

let router = require('express').Router();

// Create a new Tutorial
router.post("/tutorials", tutorials.create);

// Retrieve all Tutorials
router.get("/publishing", tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/findOne:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/Update:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/Delete:id", tutorials.delete);

// Delete all Tutorials
router.delete("/Delete", tutorials.deleteAll);

app.use('/api/tutorials', router);
};
