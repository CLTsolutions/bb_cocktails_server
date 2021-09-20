require('dotenv').config()
const express = require('express')
const app = express()

;(async () => {
   app.use(express.json())

   app.listen(process.env.PORT, () => {
      console.log(`[SERVER]: listening on port ${process.env.PORT}`)
   })
})()
