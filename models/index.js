const { sequelize, syncDb } = require('../db')
const { DataTypes } = require('sequelize')

// grabs model fns
const DefineUser = require('./User')

// defines model
const User = DefineUser(sequelize, DataTypes)

// sync
syncDb(sequelize, { alter: true })

module.exports = { User }
