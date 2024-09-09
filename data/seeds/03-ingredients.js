
exports.seed = function(knex, Promise) {//eslint-disable-line
  return knex('ingredients').truncate()
  .then(function () {
    return knex('ingredients').insert([
      { ingredient_name: 'Cereal'},
      { ingredient_name: 'Blueberries'},
      { ingredient_name: 'Honey'},
      { ingredient_name: 'Cinnamon'},
      { ingredient_name: 'Whole Fat Milk'},
    ])
  })
};