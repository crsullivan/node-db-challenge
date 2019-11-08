exports.seed = function(knex) {
  return knex('projects').insert([
    {name: 'cross the lake', description: 'lake between us and the cabin', completed: 0},
    {name: 'prepare for winter', description: 'we need enough food and wood', completed: 0},
    {name: 'survive', description: 'diligence, awareness and a healthy state of mind', completed: 0}
  ]);
};
