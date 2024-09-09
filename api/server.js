//Create express server
const express = require('express')
const server = express()
const RecipeRouter = require('./recipe/recipe_router')

//Import router endpoints

server.use('/api/recipe', RecipeRouter)

//Global Middleware
server.use(express.json())

//Export server
module.exports = server