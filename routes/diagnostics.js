const express = require('express');
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const router = express.Router();
const uuid = require('../helpers/uuid');

// GET Route for retrieving diagnostics
router.get('/', (req, res) => {
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)));
});

// POST Route for logging diagnostics
router.post('/', (req, res) => {
  const { time, error } = req.body;

  if (time && error) {
    const newDiagnostic = {
      time,
      error,
      id: uuid(),
    };

    readAndAppend(newDiagnostic, './db/diagnostics.json');
    res.json('Diagnostic added successfully 🚀');
  } else {
    res.json('Error in adding diagnostic');
  }
});

module.exports = router;
