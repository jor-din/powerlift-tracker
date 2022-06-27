import { Router } from 'express'
import passport from 'passport'

const router = Router()

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

// Google OAuth callback route
router.get(
  '/google/oauth2callback', 
  passport.authenticate('google', {
    successRedirect: '/profiles',
    failureRedirect: '/profiles',
  })
)

// OAuth logout route
router.get('/logout', function (req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err)}
    res.redirect('/profiles')
  })
})

export {
  router
}
