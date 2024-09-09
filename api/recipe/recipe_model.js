const db = require("../../data/db_config");

async function query(id) {
  const rows = await db("recipes as re")
    .select(
      "re.*",
      "st.step_id",
      "st.step_number",
      "st.step_instructions",
      "qi.quantity",
      "i.*"
    )
    .where('re.recipe_id', id)
    .leftJoin("steps as st", "st.recipe_id", "=", "re.recipe_id")
    .leftJoin("quantity_index as qi", "qi.step_id", "=", "st.step_id")
    .leftJoin("ingredients as i", "i.ingredient_id", "=", "qi.ingredient_id")
    

  let result = {
    recipe_id: rows[0].recipe_id,
    recipe_name: rows[0].recipe_name,
    created_at: rows[0].created_at,
    steps: [],
  };

  const objFirst = {
    step_id: rows[0].step_id,
    step_number: rows[0].step_number,
    step_instructions: rows[0].step_instructions,
    ingredients: [],
  };
  result.steps.push(objFirst);

  for (let i = 1; i < rows.length; i++) {
    const objAdd = {
      step_id: rows[i].step_id,
      step_number: rows[i].step_number,
      step_instructions: rows[i].step_instructions,
      ingredients: [],
    };
    if (rows[i - 1].step_id === objAdd.step_id) {
      continue;
    } else {
      for (let p = 0; p < rows.length; p++) {
        if (objAdd.step_number === rows[p].step_id) {
          objAdd.ingredients.push({
            ingredient_id: rows[p].ingredient_id,
            ingredient_name: rows[p].ingredient_name,
            quantity: rows[p].quantity,
          });
        } else {
          continue;
        }
      }
      result.steps.push(objAdd);
    }
  }
  return result;
}
module.exports = {
  query,
};
