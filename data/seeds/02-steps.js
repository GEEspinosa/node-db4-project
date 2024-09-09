
exports.seed = function(knex, Promise) {//eslint-disable-line
  return knex('steps').truncate()
  .then(function () {
    return knex('steps').insert([
      { step_number: 1, step_instructions: 'Grab a beautiful bowl', recipe_id: 1},
      { step_number: 2, step_instructions: 'Pour four heaps of cereal into bowl', recipe_id: 1},
      { step_number: 3, step_instructions: 'Add a pound of blueberries, tablespoon of honey, and teaspoon of cinnamon', recipe_id: 1},
      { step_number: 4, step_instructions: 'Pour a gallon of whole fat milk', recipe_id: 1},  
    ])
  })
};
