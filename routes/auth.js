import { Router } from 'express'
import passport from 'passport'
import { User } from '../models/user.js'

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

// Google OAuth callback route
router.get(
  '/google/oauth2callback',
  passport.authenticate('google', { failureRedirect: '/auth/google' }), function(req, res) {
    User.findById(req.user._id)
    .then(user => {
      res.redirect('/profile/' + user.profile)
    }).catch(err => {
      console.log(err)
      res.redirect("/")
    })
  }
)

// OAuth logout route
router.get('/logout', function (req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err)}
    res.redirect('/')
  })
})

export {
  router
}
