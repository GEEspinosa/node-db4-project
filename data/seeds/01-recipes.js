
exports.seed = function(knex, Promise) {//eslint-disable-line
  return knex('recipes').truncate()
    .then(function () {
      return knex('recipes').insert([
        { recipe_name: 'Perfect Bowl of Cereal', created_at: Date()},
      ])
    })
};
