const express = require('express')
const router = express.Router()

const Recipes = require('./recipe_model')
// const {
// } = require('./recipe_middleware')


router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const recipes = await Recipes.query(id)
        res.status(200).json(recipes)

    } catch (err) {
        next(err)
    }
})


//error handling middleware
router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      sageAdvice: 'Finding the real error is 90% of the bug fix',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router