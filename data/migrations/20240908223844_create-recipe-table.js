exports.up = function(knex, Promise) {//eslint-disable-line
  
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments('recipe_id');
        tbl.text('recipe_name', 128)
            .notNullable()
            .unique();
        tbl.text('created_at', 128)
            .notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments('step_id');
        tbl.integer('step_number');
        tbl.text('step_instructions', 128);
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('recipe_id')
            .inTable('recipes')

    })
    .createTable('ingredients', tbl => {
        tbl.increments('ingredient_id');
        tbl.text('ingredient_name', 128)
            .notNullable()
            .unique();
    })
    .createTable('quantity_index', tbl => {
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('ingredient_id')
            .inTable('ingredients');
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('step_id')
            .inTable('steps');
        tbl.text('quantity')
            .unsigned()
            .notNullable();
    })
};

exports.down = function(knex, Promise) {//eslint-disable-line
    return knex.schema
        .dropTableIfExists('quantity_index')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
    
};
