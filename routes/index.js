const express = require('express');
const tipsRouter = require('./tips');
const diagnosticsRouter = require('./diagnostics');

const app = express();

app.use('/tips', tipsRouter);
app.use('/diagnostics', diagnosticsRouter);

module.exports = app;
