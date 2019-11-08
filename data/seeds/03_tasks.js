exports.seed = function(knex) {
  return knex('tasks').insert([
    {description: 'put the canoe in the lake', notes: '', completed: 0, project_id: 1},
    {description: 'get in and paddle', notes: '', completed: 0, project_id: 1},
    {description: 'harvest as much wood and food as we will need', notes: '', completed: 0, project_id: 2},
    {description: 'double that amount', notes: '', completed: 0, project_id: 2},
    {description: 'meditate', notes: '', completed: 0, project_id: 3},
    {description: 'journal', notes: '', completed: 0, project_id: 3},
  ]);
};
