
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255);
        tbl.boolean('completed').defaultTo('false');
    })
    .createTable('resources', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('description', 255);
        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('description', 255).notNullable();
        tbl.string('notes', 255);
        tbl.boolean('completed').defaultTo('false');
        tbl
        .integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT') 
        .onUpdate('CASCADE'); 
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects')
        .dropTableIfExists('resources')
        .dropTableIfExists('tasks');
};
