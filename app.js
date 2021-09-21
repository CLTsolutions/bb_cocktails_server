require('dotenv').config()
const express = require('express')
const app = express()

// const controllers = require('./controllers')

;(async () => {
   app.use(express.json())

   // app.use('./user', controllers.User)
   const user = require('./controllers/userController')
   app.use('/user', user)

   app.listen(process.env.PORT, () => {
      console.log(`[SERVER]: listening on port ${process.env.PORT}`)
   })
})()
