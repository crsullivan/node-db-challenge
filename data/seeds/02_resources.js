exports.seed = function(knex) {
  return knex('resources').insert([
    {name: 'canoe', description: 'the canoe is our safest, fastest bet', project_id: 1},
    {name: 'wood', description: 'we need enough wood to burn', project_id: 2},
    {name: 'food', description: 'we need enough food to eat', project_id: 2},
    {name: 'journal', description: 'we can use the journal to track mental states', project_id: 3}
  ]);
};
