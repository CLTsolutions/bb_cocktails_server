let router = require('express').Router()
const { UniqueConstraintError } = require('sequelize/lib/errors')
const { User } = require('../models')

router.post('/register', async (req, res) => {
   let message
   console.log(User)
   const { email, password } = req.body
   try {
      const user = await User.create({
         email: email,
         password: password,
      })
      message = {
         msg: 'User Created',
         user,
      }
   } catch (err) {
      err instanceof UniqueConstraintError
         ? res.status(409).json({
              message: 'Username is already in use.',
           })
         : res.status(500).json({
              msg: 'Failed to create user.',
              err,
           })
   }
   res.json(message)
})

router.post('/login', async (req, res) => {
   let message
   console.log(User)
   const { email, password } = req.body
   try {
      const user = await User.findOne({
         where: { email: email, password: password },
      })
      if (user) {
         message = {
            msg: 'User found.',
            user,
         }
      } else {
         res.status(404).json({
            msg: 'User does not exist.',
            err,
         })
      }
   } catch (err) {
      console.log(err)
      res.status(500).json({
         msg: 'Cannot find user.',
         err,
      })
   }
   res.json(message)
})

module.exports = router
