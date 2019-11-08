const express = require('express');
const P = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    P.getProjects()
    .then(projects => {
        const projectsMapped = projects.map(project => {
            return {...project, completed: project.completed === 0 ? false : true}
        })
      res.json(projectsMapped);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  router.get('/resources', (req, res) => {
    P.getResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.get('/tasks', (req, res) => {
    P.getTasks()
    .then(tasks => {
        const tasksMapped = tasks.map(project => {
            return {...tasks, completed: tasks.completed === 0 ? false : true}
        })
      res.json(tasksMapped);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

  router.post('/', (req, res) => {
    P.addProject(req.body)
    .then(info => res.status(201).json(info))
    .catch(err => res.status(500).json({ error: "Failed to add info" }));
  });

  router.post('/resources', (req, res) => {
    P.addResource(req.body)
    .then(info => res.status(201).json(info))
    .catch(err => res.status(500).json({ error: "Failed to add info" }));
  });

  router.post('/tasks', (req, res) => {
    P.addTask(req.body)
    .then(info => res.status(201).json(info))
    .catch(err => res.status(500).json({ error: "Failed to add info" }));
  });

module.exports = router;
