const knex = require('knex');
const config = require('../knexfile.js');
const db = knex(config.development);

module.exports = {
    getProjects,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
  };

function getProjects() {
    return db
    .select('*')
    .from('projects')
}

function getResources() {
    return db
    .select('*')
    .from('resources')
}

function getTasks(id) {
    return db
    .select('*')
    .from('tasks')
    .join('projects', 'tasks.id', 'projects.id')
    // .where('project_id', '=', id)
}

function addProject(project) {
    return db('projects')
    .insert(project)
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
}

function addTask(task) {
    return db('tasks')
    .insert(task)
}