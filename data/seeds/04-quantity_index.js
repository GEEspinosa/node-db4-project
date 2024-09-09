exports.seed = function(knex, Promise) {//eslint-disable-line
  return knex('quantity_index').truncate()
  .then(function () {
    return knex('quantity_index').insert([
      { ingredient_id: 1, step_id: 2, quantity: 'four heaps'},
      { ingredient_id: 2, step_id: 3, quantity: 'a pound'},
      { ingredient_id: 3, step_id: 3, quantity: 'a tablespoon'},
      { ingredient_id: 4, step_id: 3, quantity: 'a teaspoon'},
      { ingredient_id: 5, step_id: 4, quantity: 'a gallon'}
    ])
  })
};
