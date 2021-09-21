let router = require('express').Router()
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
      console.log(err)
      msg = {
         msg: 'Failed to create user.',
      }
   }
   res.json(message)
})

module.exports = router
