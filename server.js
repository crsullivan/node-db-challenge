const express = require('express');

const ProjectsRouter = require('./projects/projects-router.js');

const server = express();

server.use(express.json());

server.use('/projects', ProjectsRouter);

server.get('/', (req, res) => {
  res.send('<h3>Sprint Project</h3>');
});

module.exports = server;